import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        カーサーをアイコンの上に動かすとレベルが表示されます。
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill lang="css" level="90" />
        <Skill lang="html" level="90" />
        <Skill lang="js" level="90" />
        <Skill lang="react" level="80" />
        <Skill lang="tailwind" level="80" />
        <Skill lang="vs" level="90" />
        <Skill lang="php" level="80" />
        <Skill lang="mysql" level="80" />

        <Skill lang="ts" level="50" />
        <Skill lang="firebase" level="50" />
      </div>
    </motion.div>
  );
};

export default Skills;
