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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-800 text-2xl underline decoration-[#ffffff]/50">
        自己PR
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
        {/* <h4 className="text-4xl  font-semibold">
          <span className="underline decoration-[#ffffff]/50">簡潔な</span>
          自己紹介です。
        </h4> */}
        <ul className="text-base list-disc">
          <li className="mb-2">
            ニュージーランドに2年アメリカに14年と長い海外生活していたので、身に着けた英語力を活かして国内では見つけることのできない情報を英語圏のサイトから探し出し、バグ対応を迅速に行うことが可能。
          </li>
          <li className="mb-2">
            画像、動画、GIFの広告バナー制作経験があり、必要に応じバナーや画像等のデザイン制作、調整、変更が可能。
          </li>
          <li className="mb-2">
            多数の特設ページを制作した経験がある。リスポンシブで管理のしやすいHPの制作が可能。
          </li>
          <li className="mb-2">
            データベースを用いて予約サイトとその管理ページを開発と管理をした経験あり、バックエンドとのスムーズなやり取り可能。
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;
