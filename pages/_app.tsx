import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  
    return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );   
}
