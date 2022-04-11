import { Box, Flex, Heading,Spacer,HStack,Circle } from "@chakra-ui/react";
import Link from "next/link";
import ToogleButton from "./tooglebutton";



const Header = () => (
<Flex  width="full"  align="center" mr={5}>
        <Heading  as="h1" size="md">
        <Link href="/">Blogger</Link>
          
        </Heading>

        <Box marginLeft="auto">
          
          <ToogleButton />
        </Box>

      </Flex>
 

);

export default Header;