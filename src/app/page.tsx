"use client"

import { motion } from "framer-motion"; 
import Link from "next/link";


const Homepage = () => {
  const line0 = "HELLO,"
  const line1 = "My name is Mark Ifeoluwa but you can call me MXRK-DEV. I am a Fullstack Developer that specializes in Javascript. I love to craft solid and scalable Web Applications with great user experiences."

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{ duration: 1 }}>

    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 space-x-6 ">
       {/* TEXT CONTAINER */}
       <div className="h-full lg:h-full lg:full flex flex-col gap-8 items-center justify-center">

       <motion.h1
    variants={sentence} 
    initial="hidden"
    animate="visible" 
    className="load screen--message text-black  font-black   italic text-left text-3xl">{line0.split("").map((char, index) => {
      return (
        <motion.span key={char + "-" + index} variants={letter}>
          {char}
        </motion.span>
      )
    })}</motion.h1>

        <motion.h1
    variants={sentence} 
    initial="hidden"
    animate="visible" 
    className="load screen--message text-black text-xl md:text-xl  italic font-mono">{line1.split("").map((char, index) => {
      return (
        <motion.span key={char + "-" + index} variants={letter}>
          {char}
        </motion.span>
      )
    })}</motion.h1>
            {/* BUTTONS */}
            <motion.div className="w-full flex items-center justify-center gap-4 "
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 16 }}>
            <Link href='/portfolio'>  <button  className="p-4 rounded-lg ring-1 ring-white text-white bg-black hover:white  hover:bg-sky-400 ...">View my work</button> </Link>
            <Link href='/contact'> <button className="p-4 rounded-lg ring-1 ring-black text-black bg-white hover:bg-sky-200 ...">Contact Me</button> </Link>
            </motion.div>
       </div>
    </div>
  
      </motion.div>
  )
}


export default Homepage;