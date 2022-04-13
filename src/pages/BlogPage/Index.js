import { Box, Flex } from "@chakra-ui/react"
import BlogCard from "../../components/BlogCard"
//https://bit.ly/2k1H1t6
const Index = () => {
    const blog = [
        {
        id:1,
        imageUrl: 'https://bit.ly/2k1H1t6',
        imageAlt: 'blog image',
        name:"Blog name",
        Tags:"#blog #blog",
        tagline: 'Blog is lyf',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,},
        {
        id:2,    
        imageUrl: 'https://bit.ly/2k1H1t6',
        imageAlt: 'blog image',
        name:"Blog name",
        Tags:"#blog #blog",
        tagline: 'Blog is lyf',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,},
        {
        id:3,
        imageUrl: 'https://bit.ly/2k1H1t6',
        imageAlt: 'blog image',
        name:"Blog name",
        Tags:"#blog #blog",
        tagline: 'Blog is lyf',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,},
        {
            id:4,    
        imageUrl: 'https://bit.ly/2k1H1t6',
        imageAlt: 'blog image',
        name:"Blog name",
        Tags:"#blog #blog",
        tagline: 'Blog is lyf',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,},
    ]
  return (
   <Box >
   {blog.map((x)=>(
       <BlogCard key={'1'} blog={x} />
   ))}
   </Box>
  )
}

export default Index