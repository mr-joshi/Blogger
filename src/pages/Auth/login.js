import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    InputGroup,
    InputRightElement
  } from '@chakra-ui/react';
  import { useState } from 'react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


  export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const initialState={email:'',password:''}
    const [formData,setFromData]=useState(initialState);
    const onHandleChange=(e)=>{
      setFromData({...formData,[e.target.name]:e.target.value})
    }
  
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(formData)
      setFromData(initialState)
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login To Your Account
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'2xl'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input value={formData.email} name='email' onChange={onHandleChange} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input value={formData.password} name='password' onChange={onHandleChange} name="password" type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link href='/Auth/forgotPassword' color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Dont Have Account? <Link href='/Auth/signUp'color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Box>
          </form>
        </Stack>
      </Flex>
    );
  }