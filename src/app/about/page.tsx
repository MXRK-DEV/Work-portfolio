"use client"
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion"; 
import { useRef } from "react";

const AboutPage= () => {

  const componentRef = useRef<HTMLDivElement>(null); 

  const {scrollYProgress} = useScroll({ container: componentRef });

  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef)

  const experienceRef = useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef)

  return (
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0"}} 
    transition={{duration: 1}}>
       
       {/* CONTAINER */}
       <div className="h-full overflow-scroll lg:flex" ref={componentRef}>
        
        {/* TEXT CONTAINER  */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          
          
           {/* SKILLS CONTAINER */}
           <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            
            {/* SKILL TITLE */}
            <motion.h1 
            initial={{x:"-300px"}} 
            animate={isSkillRefInView ? {x:0} : {}} 
            transition={{ delay:0.2 }} 
            className="font-bold text-2xl">SKILLS</motion.h1>
           
           {/* SKILL LIST */}
           <motion.div 
            initial={{x:"-300px"}} 
            animate={isSkillRefInView ? {x:0} : {}}
            transition={{ delay:0.2 }}
           className="flex gap-4 flex-wrap">
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JAVASCRIPT</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TYPESCRIPT</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">REACT.JS</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NEXT.JS</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TAILWINDCSS</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Mongo DB</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NODE.JS</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">EXPRESS.JS</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">FRAMER-MOTION</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">PHP</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MYSQL</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SUPABASE</div>
            <div className=" rounded p-2 test-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">REACT-NATIVE</div>
           </motion.div>

            {/* SKILL SCROLL SVG */}
            <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat:Infinity, duration:3, ease:"easeInOut"  }}
          viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>


            </div>

            {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            
            {/*EXPERIENCE TITLE */}
            <motion.h1  
            initial={{x:"-300px"}} 
            animate={isExperienceRefInView ? {x:0} : {}} 
            transition={{ delay:0.2 }} 
            className="font-bold text-2xl">EXPERIENCE</motion.h1>

            {/* EXPERIENCE LIST */}
            <motion.div className="">

            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
            
            {/* LEFT */}
          <div className="w-1/3 ">
            {/* JOB TITLE */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg "> Freelancer</div>
            {/* JOB DESCRIPTION */}
            <div className="p-3 text-sm italic"> 
            I create reliable and expandable web applications for potential clients.</div>
            {/* JOB DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold"> 2023-present</div>
            {/* JOB COMPANY */}
            {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">FrontEnd Developer(Intern)</div> */}
          </div>
           
            {/* CENTER */}
            <div className="w-1/6 ">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-1/3 "></div>
            </div>

            
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
            
            {/* LEFT */}
          <div className="w-1/3 ">
           
          </div>
           
            {/* CENTER */}
            <div className="w-1/6 ">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </div>
            
            {/* RIGHT */}
            <div className="w-1/3 ">
               {/* JOB TITLE */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg"> Ancient Hold and Resources</div>
            {/* JOB DESCRIPTION */}
            <div className="p-3 text-sm italic"> 
             FrontEnd Developer(Intern)</div>
            {/* JOB DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold"> 2021-2022</div>
            {/* JOB COMPANY */}
            {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div> */}
            </div>
            </div>


            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
            
             {/* LEFT */}
          <div className="w-1/3 ">
            {/* JOB TITLE */}
            {/* <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior Javascript Engineer</div> */}
            {/* JOB DESCRIPTION */}
            {/* <div className="p-3 text-sm italic"> 
            My current employment. Way better than the position before!</div> */}
            {/* JOB DATE */}
            {/* <div className="p-3 text-red-400 text-sm font-semibold"> 2024-present</div> */}
            {/* JOB COMPANY */}
            {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div> */}
          </div>
           
            {/* CENTER */}
            <div className="w-1/6 ">
              {/* LINE */}
              {/* <div className="w-1 h-full bg-gray-600 rounded relative"> */}
                {/* LINE CIRCLE */}
                {/* <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div> */}
              {/* </div> */}
            </div>
            
            {/* RIGHT
            <div className="w-1/3 "></div> */}
            </div>


            

            

          </motion.div>
          </div>
        </div>

         {/* SVG CONTAINer */}
         <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
         </div>
        
       </div>
       
      </motion.div>
  )
}

export default AboutPage











