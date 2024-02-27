import React from 'react';
import { motion } from 'framer-motion';
import { PiBellSimple } from 'react-icons/pi';
import { CiStreamOn } from 'react-icons/ci';

const Navbar = () => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className='flex justify-between lg:justify-around p-4 font-noto shadow-md'
      initial='hidden'
      animate='visible'
      variants={variants}
    >
      <img src='/logo.png' className='h-16  ' />
      <motion.div
        className='flex text-md gap-6 my-auto'
        initial='hidden'
        animate='visible'
        variants={variants}
      >
        <motion.div
          className='lg:flex text-md gap-6 hidden my-auto'
          initial='hidden'
          animate='visible'
          variants={variants}
        >
          <h1 className='my-auto font-bold text-sm hover:scale-110 hover:text-[#F2800E] cursor-pointer'>मुखपृष्ट</h1>
          <h1 className='my-auto font-bold text-sm hover:scale-110 hover:text-[#F2800E] cursor-pointer'>गडाविषयी माहिती</h1>
          <h1 className='my-auto font-bold text-sm hover:scale-110 hover:text-[#F2800E] cursor-pointer'>देणगी</h1>
          <h1 className='my-auto font-bold text-sm hover:scale-110 hover:text-[#F2800E] cursor-pointer'>संपर्क करा</h1>
        </motion.div>
        <motion.div
          className='bg-[#F5EFE8] my-auto rounded-xl p-2'
          whileHover={{ scale: 1.1 }}
        >
          <PiBellSimple className='my-auto text-xl' />
        </motion.div>
        <motion.div
          className='bg-[#F42600] cursor-pointer hover:bg-red-900 flex gap-2 p-2 rounded-md'
          whileHover={{ scale: 1.1 }}
        >
          <CiStreamOn className='text-white font-bold text-2xl animate-pulse my-auto' />
          <button className='text-white font-semibold'>Live</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
