import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        イントロ
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        viewport={{ once: true }}
        src="https://github.com/tada3345/react_dev/blob/main/src/assets/img/banner-img.png?raw=true"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl  font-semibold">
          自己紹介を
          <span className="underline decoration-[#f7ab0a]/50">簡潔に</span>
          <br />
          申し上げます。
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta
          aliquid alias, perferendis facere tempore voluptates, molestiae nihil
          nemo, nesciunt officia quasi quia saepe sequi doloremque reiciendis
          veritatis in quos!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
