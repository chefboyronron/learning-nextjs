// Head Component - meta data
import Head from 'next/head'
// Layout
// "Header" Alias path import please look jsconfig.json for configuration.
import Header from '@/misc/header'
import Footer from '../components/misc/footer'
import '../styles/misc/layout.scss'

import '../styles/globals.css'
// npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Styled Component Usage
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#355C7D'
  }
}

function MyApp({ Component, pageProps }) {

  if( typeof Component.getLayout !== 'undefined' ) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
          <title>Default Title Tag</title>
          <meta name="description" content="Default meta description tag" />
      </Head>
      <Header />
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
      <Footer />
    </>
  )
}

export default MyApp
