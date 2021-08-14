import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Amase-Zon</title>
      </Head>
      <AppBar position='static'>
        <Toolbar>
          <Typography>Amase-Zon</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
      <footer>
        <Typography>All rights reserved. Amase-Zon.</Typography>
      </footer>
    </div>
  )
}