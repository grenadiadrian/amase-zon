import Layout from "@/components/Layout";
import useStyles from "@/utils/styles";
import NextLink from 'next/link'
import { Button, Link, List, ListItem, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Store } from "@/utils/Store";
import Cookies from "js-cookie";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

export default function RegisterScreen() {
  const { handleSubmit, control, formState: { errors }} = useForm()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const router = useRouter()
  const { redirect } = router.query
  const { state, dispatch } = useContext(Store)
  const { userInfo } = state
  useEffect(() => {
    if (userInfo) {
      router.push('/')
    }
  }, [])
  const classes = useStyles()
  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    closeSnackbar()
    if (password !== confirmPassword) {
      enqueueSnackbar('Passwords do not match', { variant: 'error' })
      return
    }
    try {
      const { data } = await axios.post('/api/users/register', { name, email, password })
      dispatch({ type: 'USER_LOGIN', payload: data })
      Cookies.set('userInfo', JSON.stringify(data))
      router.push(redirect || '/')      
    } catch (err) {
      enqueueSnackbar(err.response.data ? err.response.data.message : err.message, { variant: 'error' })
    }
  }
  return (
    <Layout title='Register'>
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography component='h1' variant='h1'>
          Register
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2
              }}
                render={({ field }) => (
                  <TextField 
                    variant='outlined' 
                    fullWidth 
                    id='name' 
                    label='Name' 
                    inputProps={{ type: 'name' }} 
                    error={Boolean(errors.name)} 
                    helperText={errors.name ? errors.name.type === 'minLength' ? 'Name must be at least 2 characters' : 'Name is required' : ''}
                    { ...field }
                  />
                )}
            >
            </Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
                render={({ field }) => (
                  <TextField 
                    variant='outlined' 
                    fullWidth 
                    id='email' 
                    label='Email' 
                    inputProps={{ type: 'email' }} 
                    error={Boolean(errors.email)} 
                    helperText={errors.email ? errors.email.type === 'pattern' ? 'Email is not valid' : 'Email is required' : ''}
                    { ...field }
                  />
                )}
            >
            </Controller>
          </ListItem>
          <ListItem>
            <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 6
                }}
                  render={({ field }) => (
                    <TextField 
                      variant='outlined' 
                      fullWidth 
                      id='password' 
                      label='Password' 
                      inputProps={{ type: 'password' }} 
                      error={Boolean(errors.password)} 
                      helperText={errors.password ? errors.password.type === 'minLength' ? 'Password length must be at least 6 characters' : 'Password is required' : ''}
                      { ...field }
                    />
                  )}
              >
            </Controller>
          </ListItem>
          <ListItem>
            <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 6
                }}
                  render={({ field }) => (
                    <TextField 
                      variant='outlined' 
                      fullWidth 
                      id='confirmPassword' 
                      label='Confirm Password' 
                      inputProps={{ type: 'password' }} 
                      error={Boolean(errors.confirmPassword)} 
                      helperText={errors.confirmPassword ? errors.confirmPassword.type === 'minLength' ? 'Confirm Password length must be at least 6 characters' : 'Password is required' : ''}
                      { ...field }
                    />
                  )}
              >
            </Controller>
          </ListItem>
          <ListItem>
            <Button variant='contained' type='submit' fullWidth color='primary'>Register</Button>
          </ListItem>
          <ListItem>
            Already have an account?<NextLink href={`/login?redirect=${redirect || '/'}`} passHref><Link>Login</Link></NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  )
}