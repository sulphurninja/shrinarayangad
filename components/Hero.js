import React from 'react'
import {motion} from 'framer-motion'

export default function Hero() {

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

      const variant2={
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      }

    return (
        <motion.div  initial='hidden'
        animate='visible'
        variants={variants}
         className='flex justify-center   object-cover opacity-70 shadow-md shadow-black  bg-black '>
        <video src='/images/video.mp4' autoPlay muted className=' w-full ' />
            {/* <img src='/01.jpg' className='w-full object-cover opacity-60 rounded-xl' /> */}
            <motion.div 
            variants={variant2}
            animate='visible'
             className='text-white lg:mt-32 mt-16  font-noto  absolute font-bold'>
                <h1 className='lg:text-5xl text-white abs  text-2xl  ab'>श्री क्षेत्र संस्थान नारायण गड</h1>
                <p className='lg:text-2xl text-xl text-center mt-4 text-amber-200'>“धाकटी पंढरी ”</p>
            </motion.div>
        </motion.div>
    )
}
