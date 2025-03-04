import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import Image, { StaticImageData } from 'next/image';

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: StaticImageData;
}) => (
  <Tilt
    className="xs:w-[250px] w-full"
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      initial="hidden"
      whileInView="show"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image src={icon} alt="web-development" className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        initial="hidden"
        whileInView="show"
      >
        As a frontend developer with a passion for innovation, I bring expertise in TypeScript,
        JavaScript, and cutting-edge frameworks like React and Next.js. I specialize in transforming
        complex designs into intuitive, responsive interfaces using tools like Tailwind CSS, SCSS,
        and Bootstrap. Known for my ability to quickly adapt and collaborate effectively, I deliver
        scalable, high-performance solutions that address real-world challenges. Together, we can
        bring your ideas to life with creativity, precision, and impact.
      </motion.p>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
