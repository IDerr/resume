import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
