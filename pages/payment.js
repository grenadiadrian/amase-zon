import CheckoutWizard from '@/components/CheckoutWizard'
import Layout from '@/components/Layout'
import { Store } from '@/utils/Store'
import useStyles from '@/utils/styles'
import { Button, FormControl, List, ListItem, Typography, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import React, { useContext, useEffect, useState } from 'react'

export default function PaymentScreen() {
  const classes = useStyles()
  const router = useRouter()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [paymentMethod, setPaymentMethod] = useState('')
  const { state, dispatch } = useContext(Store)
  const { cart:{shippingAddress} } = state
  useEffect(() => {
    if (!shippingAddress.address) {
      router.push('/shipping')
    } else {
      setPaymentMethod(Cookies.get('paymentMethod') || '')
    }
  }, [])
  const submitHandler = (e) => {
    closeSnackbar()
    e.preventDefault()
    if (!paymentMethod) {
      enqueueSnackbar('Payment method is required', { variant: 'error' })
    } else {
      dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod})
      Cookies.set('paymentMethod', paymentMethod)
      router.push('/placeorder')
    }
  }
  return <Layout title='Payment Method'>
    <CheckoutWizard activeStep={2} />
    <form className={classes.form} onSubmit={submitHandler}>
      <Typography component='h1' variant='h1'>
        Payment Method
      </Typography>
      <List>
        <ListItem>
          <FormControl component='fieldset'>
            <RadioGroup 
              aria-label='Payment Method'
              name='paymentMethod'
              value={paymentMethod}
              onChange={e => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel label='PayPal' value='PayPal' control={<Radio />} />
              <FormControlLabel label='Stripe' value='Stripe' control={<Radio />} />
              <FormControlLabel label='Credit Card' value='Credit Card' control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </ListItem>
        <ListItem>
          <Button variant='contained' fullWidth color='primary' type='submit'>Continue</Button>
        </ListItem>
        <ListItem>
          <Button variant='contained' fullWidth type='button' onClick={() => router.push('/shipping')}>Back</Button>
        </ListItem>
      </List>
    </form>
  </Layout>
}