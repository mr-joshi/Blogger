import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import BlogPage from './BlogPage'
import { useState } from 'react'
import MainPage from './MainPage'
//import Carousel from './carousel/index'
import Carousel from './../components/carousel'
export default function Home() {
  const [signin,setSignin]=useState(false);
  
  return (
   <>
   {signin ? 
     <>
     
     <Carousel/>
     <BlogPage/>
    
     
     </>
   :
     <MainPage/>
   }
   </>
  )
}
