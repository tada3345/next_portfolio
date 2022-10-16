import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercas
      initial={{ opacity: 0 }}8
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}e tracking-[20px] text-gray-800 text-2xl"
      >
        業務実績
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <ExperienceCard
          title="HPフルスタックエンジニア/ウェブサイト/社内管理システム制作/管理"
          company="大手漫画喫茶"
          techs={[
            'PHP',
            'HTML',
            'SCSS',
            'MySQL',
            'Ajax',
            'Javascript',
            'Bootstrap',
          ]}
          job_start="令和2年1月"
          job_end="令和4年9月"
          lis={[
            '各店舗や各時間によって内容と表示が切り替わるダイナミックな 店内・案内ウェブページを作成。バナー広告で月 60 万円を超える収入を獲得(PHP、SQL、HTML、CSS、JavaScript)月平均 PV 数 2 万',
            '完全個室店舗の事前予約と管理ページ作成。それまで電話にて管理していた社内予約システムをメール送信機能で業務を簡易化し、会社の業務効率化とスムーズな予約による売り上げに貢献した。',
            'トップページ http://manboo.co.jp/ SEO、デザイン、動きに力を入れ、ＰＶ数を毎月平均 10,0837 から355,144 と 3.5 倍以上上げることに成功',
            '全 36 店舗の 2000 名を超えるアルバイト/社員スタッフの申請や本部に対する要望システムを作成し、業務効率化に貢献した。(PHP、SQL、HTML、CSS、JavaScript)',
            'サービスの告知に社内独自の「まとめサイト」を作成。特に、「女性専用サービス」を特集したページが月 4,751 の PV 数を獲得し、来客を促進した',
          ]}
        />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
