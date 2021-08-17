import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import useStyles from '@/utils/styles'
import Head from 'next/head'

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>amase-zon</title>
      </Head>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <Typography>amase-zon</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
        {children}
      </Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Amase-Zon.</Typography>
      </footer>
    </div>
  )
}