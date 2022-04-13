import {Text, Box, Flex, Heading,useColorMode ,Button,Stack,Image} from '@chakra-ui/react'
import React from 'react'
import Link from 'next/dist/client/link'
import MotionBox from '../../components/Motion/MotionBox'

const MainPage = () => {
  const {colorMode}=useColorMode();

  return (
    <Flex
    textAlign={'start'}
    align={'end'}
    spacing={{ base: 8 }}
    
    py={{ base: 16, md: "55px" }}
    direction={{base:"column",lg:"row"}}
    minH="74vh">
    <Stack spacing={6} >
     <Heading
      fontSize={{ base: '3xl', sm: '2xl', md: '4xl' }}
      lineHeight={'110%'}
      >
      Blogging the reel world:{' '}
      <Text as={'span'} variant="primary" color={colorMode=="light"?'red.500':"yellow.500"} rounded={'full'}>
      Make it Real World{' '}
      </Text>
      BLOGGER....
      
    </Heading>
    <Text color={'gray.500'} maxW={'3xl'}>
      Create Blogs and share your Blogs in minutes,  Here We provide you many Premium Options for 
      Free ,Start your Blogging Carrer here,Give your blog the perfect home,Save the moments that matter. 
      We let you safely store thousands of posts, photos, and more with Google for free.
    </Text>
    <Flex>
        <Link href="/Auth/login" passHref>
          <Button  backgroundColor={colorMode=="light"?'gray.300':"teal.500"}
            variant="primary"  px={6} mr={6}>
           Login
          </Button>
        </Link>
        <Link href="/Auth/signUp" passHref>
          <Button  backgroundColor={colorMode=="light"?'gray.300':"teal.500"} rounded={'full'} px={6} >
            SignUp
          </Button>
        </Link>
    </Flex>
    </Stack>
    <Flex w={'full'} marginX='auto'>
    
          <Image
            src={'https://clickfirstmarketing.com/wp-content/uploads/Purpose-of-Blogging.jpeg'}
            width={400}
            height={400}
            alt="nfts"
            marginX='10px'
            
          />
       
    </Flex>
   
  </Flex>
  )
}

export default MainPage
