import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      title: 'HPリニューアル作成',
      desc: 'モダンなデザインに明るく仕上げ、デザイン変更前との比較でpV数を毎月3.5倍以上上げることに成功した',
      link: 'https://github.com/tada3345/pastProjectsImg/blob/main/hp.png?raw=true',
    },
    {
      title: '社内管理システム開発',
      desc: 'SNSのように誰でも使いやすい社内管理システムを開発した',
      link: 'https://github.com/tada3345/pastProjectsImg/blob/main/fms.png?raw=true',
    },
    {
      title: '店内用案内ページ',
      desc: 'ネットカフェ利用の方向けに、動画や店内サービスのご案内のほか、天気や最新ニュース等を開くたびに切り替わり表示させるページを開発した。',
      link: 'https://github.com/tada3345/pastProjectsImg/blob/main/inshop.png?raw=true',
    },
    {
      title: '販促・SEO対策用の自社コラム',
      desc: 'SEO対策として貢献。 特に、左の女性専用サービスの特集ページでは、「女性専用　ネットカフェ　まんが喫茶」でグーグル検索すると上位3位内にリストされ来客を促した',
      link: 'https://github.com/tada3345/pastProjectsImg/blob/main/column.png?raw=true',
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
       scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80
      "
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.link}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  {i + 1} of {projects.length} :
                </span>
                {project.title}
              </h4>
              <p className="text-lg text-center md:text-left">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
