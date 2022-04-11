import { Flex } from "@chakra-ui/react"
import BlogCard from "../../components/BlogCard"

const Index = () => {
    const blog = [
        {imageUrl: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imageAlt: 'blog image',
        name:"Blog name",
        Tags:"#blog #blog",
        tagline: 'Blog is lyf',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,},
        {imageUrl: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imageAlt: 'blog image',
        name:"Blog name",
        Tags:"#blog #blog",
        tagline: 'Blog is lyf',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,},
        {imageUrl: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imageAlt: 'blog image',
        name:"Blog name",
        Tags:"#blog #blog",
        tagline: 'Blog is lyf',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,},
        {imageUrl: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imageAlt: 'blog image',
        name:"Blog name",
        Tags:"#blog #blog",
        tagline: 'Blog is lyf',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,},
    ]
  return (
   <Flex gridGap={3}>
   {blog.map((x)=>(
       <BlogCard key={'1'} blog={x}/>
   ))}
   </Flex>
  )
}

export default Index