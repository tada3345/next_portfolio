import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 1.8, 1.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#ffffff] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="border border-[#adadad] rounded-full h-[300px] w-[300px] absolute mt-52" />
      <div className="border border-[#adadad] rounded-full h-[500px] w-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#f7ab0a] opacitiy-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#adadad] h-[800px] w-[800px] absolute mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
