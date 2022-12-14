import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

import Tada_img from './assets/Yasuda_400_400.jpg';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      '実績◎スキル◎人間性◎',
      'React PHP MySQL Javascript HTML SASS Vue GIT...etc',
      'TOEIC910点 抜群の英語力',
      '即日就業可!',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        width={200}
        height={200}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={Tada_img}
        // src="https://github.com/tada3345/react_dev/blob/main/src/assets/img/yasuda.png?raw=true"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-800 pb-2 tracking-[15px]">
          フロントエンジニア
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href="#intro">
            <button className="heroButton">イントロ</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">業績</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">スキル</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">ポートフォリオ</button>
          </Link>

          <Link href="#contact">
            <button className="heroButton">お問い合わせ</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
