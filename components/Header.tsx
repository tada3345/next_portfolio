import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center "
      >
        {/*social icons*/}
        <SocialIcon
          url="https://twitter.com/t"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="white"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-white">
            お問い合わせ
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
