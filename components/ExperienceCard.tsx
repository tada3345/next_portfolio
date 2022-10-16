import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  title: String;
  company: String;
  techs: String[];
  job_start: String;
  job_end: String;
  lis: String[];
};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#f7ab0a] p-10 hover:opacity-100 opactiy-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-200 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top"
        src="https://github.com/tada3345/react_dev/blob/main/src/assets/img/avt4.png?raw=true"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{props.title}</h4>
        <p className="font-bold text-1xl mt-1">{props.company}</p>

        <p className="uppercase py-5 text-gray-800">
          {props.job_start} --{props.job_end}
        </p>
        <ul
          className="list-disc space-y-4 ml-5 text-lg relative w-full overflow-x-scroll overflow-y-hidden snap-y snap-mandatory z-20
       scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
        >
          {props.lis.map((li, index) => (
            <li key={index}>{li}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
