import {Box} from '@chakra-ui/react'
import Footer from './Footer';
import Header from './Header';

 const Layout = ({children}) => {
  return (
    <Box  transition="0.75s ease-out">
    <Box margin="0 auto" maxWidth={1200} marginY={22}>
        <Header/>
        
    </Box>
      <Box  margin="0 auto" maxWidth={800} marginY={22} >
        {children}
      </Box>
      <Footer/>

  </Box>
  )
}
export default  Layout
