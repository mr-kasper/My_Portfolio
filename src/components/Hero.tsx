import { motion } from 'framer-motion';

import { ComputersCanvas } from './canvas';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="absolute inset-0 top-[55px]  max-w-7xl mx-auto paddingX flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="heroHeadText text-white">
            Hi, I&apos;m <span className="text-[#915EFF]">Rachid</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100 xs:block hidden">
            I craft intuitive user interfaces, <br className="sm:block hidden" />
            dynamic web applications, and engaging digital experiences.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link href="#about">
          <div className="flex flex-col items-center cursor-pointer">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 group-hover:bg-slate-800/20 transition-colors duration-300 ease-in-out">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
