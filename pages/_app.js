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
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
