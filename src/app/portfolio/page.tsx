"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faJs } from '@fortawesome/free-brands-svg-icons';


const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Whatsapp-Clone",
    desc: "A full-stack WhatsApp-clone with UI-design and components from REACT, authentication with CLERK AUTH, backend and JS-powered database with core features such as creating conversations sending messages images/video with CONVEX and also integration of project with open-ai. Finally we add video calling with screen sharing.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    
    link: "https://whatsapp-clone-jrv3.onrender.com",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Fitness-Record",
    desc: "A full-stack MERN application which allows us keep progress of our gym fitness journey and was developed using React for the front end, Express and Node.js for the backend, and mongoDB for the database. Redux is also used, which helps us resolve state transfer issues.",
   
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://fitness-record-iev9.onrender.com",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Posts-Application",
    desc: "A full-stack MERN application which allows us create,delete and update posts and was developed using React for the front end, Express and Node.js for the backend, and mongoDB for the database. Redux is also used, which helps us resolve state transfer issues.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://posts-application.onrender.com",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "TODO-App",
    desc: "A simple TODO mobile application created with REACT-NATIVE which allows us create a todo list update it and also delete it when not needed.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://myproject-ecru-nine.vercel.app/",
  },
];


const PortfolioPage= () => {

  const ref = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({ target:ref })
  const x = useTransform(scrollYProgress,[0, 1],["0%", "-80%"])

  return (
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0"}} 
    transition={{duration: 1}}>

      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center text-black">My Works</div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }}  className="flex">
          <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
          {items.map((item) => ( 
          <div 
          className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color,item.id}`} 
          key={item.id}>
            <div className="flex flex-col gap-8 text-white  bg-green-300">
              
              <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
              <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[300px] lg:h-[150px] xl:w-[400px] xl:h-[220px]">
                {/* <Image src={item.img} alt="" fill/> */}   <FontAwesomeIcon icon={faJs}  width={124} height={124} className="fa-10x" /> 
              </div>
              <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] font-semibold">{item.desc}</p>
              <Link href={item.link} className="flex justify-end"><button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button></Link>
            </div>
          </div>
          ))}
        </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-pink-100 to-blue-300">
          <h1 className="text-8xl">Do you have a project?</h1>
          <div className="relative">
            <motion.svg
            animate={{rotate:360}}
            transition={{duration:8, ease:"linear", repeat:Infinity}}
            viewBox="0 0 300 300" className="w-64 h-64  md:w-[500px] md:h-[500px] ">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl text-white">Full-stack Developer and  Designer</textPath>
            </text>
            </motion.svg>
            <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-green-300  rounded-full flex items-center justify-center text-white text-3xl">Hire Me</Link>
          </div>
        </div>
      </motion.div>
  );
};

export default PortfolioPage