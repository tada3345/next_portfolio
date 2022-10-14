import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      '最新技術で日本を盛り上げる',
      'React Vue PHP MySQL Javascript HTML ...etc',
      '即日就業可!',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-fill h-32 w-32 mx-auto object-cover"
        src="https://github.com/tada3345/react_dev/blob/main/src/assets/img/yasuda.png?raw=true"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
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
