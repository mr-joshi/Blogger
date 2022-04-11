import {Box,Image,Badge} from '@chakra-ui/react'
import Link from 'next/link'
const BlogCard = ({blog}) => {
  

  return (
    <Link href="/">
      <Box  maxW='sm' borderWidth='1px' borderRadius='lg' overflow='Hidden'>
      <Image src={blog.imageUrl} alt={blog.imageAlt}/>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
           
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              {blog.name}
            </Badge>
            <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
            >
              {blog.Tags}

            </Box>
            
        </Box>  
        
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {blog.tagline}
        </Box>
 
      </Box>
    </Box>
    </Link>
  )
}

export default BlogCard