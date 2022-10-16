import React from 'react';
import { motion } from 'framer-motion';
import { GrWorkshop } from 'react-icons/gr';
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
      <motion.span
        initial={{
          y: -10,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <GrWorkshop
          style={{ color: 'orange' }}
          className="w-10 h-10 p-1 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-top text-lg color-orange-500 bg-white"
        />
      </motion.span>
      <div className="px-10 md:px-10">
        <h4 className="text-xl font-light ">{props.title}</h4>
        <p className="font-bold text-md mt-1  text-gray-600">{props.company}</p>

        <p className="uppercase py-5 text-gray-600">
          {props.job_start} - {props.job_end}
        </p>
        <ul className="list-disc space-y-1 ml-5 text-sm">
          {props.lis.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
