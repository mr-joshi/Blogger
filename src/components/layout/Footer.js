import { Box, Flex, Heading ,Text} from "@chakra-ui/react";
import Link from "next/link";



const Footer = () => (
<Box align="center" mr={5}>
        <Heading as="h2" size="lg" letterSpacing={"tighter"}>
          Blogger
        </Heading>
        
        <Box align='center' justifyContent="center" alignItems="center" >   
         <Flex justify='center' gridGap={5}>
         <Link href="/">Privacy Policy</Link>|
         <Link href="/">Terms of Use</Link>
         </Flex>

         © 2022 Blogger.com, Inc


          </Box>
        
        </Box>
      
 

);

export default Footer;