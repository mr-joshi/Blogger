import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layout'
import customTheme from '../styles/customTheme/index'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
    <Component {...pageProps} />
    </Layout>
    </ChakraProvider>
  )
}

export default MyApp
