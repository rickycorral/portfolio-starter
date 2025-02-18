import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' 
    id='home'>
      <div className='cointainer mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial="hidden"
            whileInView={'show'} 
            viewport ={{once:false, amount:0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              RICKMEISTER
            </motion.h1>
            <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial="hidden"
            whileInView={'show'} 
            viewport ={{once:false, amount:0.7}}
            className='mb-4 text-[36px] lg:text-[60px] font-secondary 
          font-semibold uppercase leading-[1]'>
              <span className='text-white mr-2'>I am a big fan of</span>
              <TypeAnimation
                sequence={[
                  'Bitcoin',
                  2000,
                  'Ethereum',
                  2000,
                  'NFTs',
                  2000,
                  'AI',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.5)} 
            initial="hidden"
            whileInView={'show'} 
            viewport ={{once:false, amount:0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit earum molestiae esse
              assumenda quas harum est tenetur.
            </motion.p>
            <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial="hidden"
            whileInView={'show'} 
            viewport ={{once:false, amount:0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12
            mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Show me what you got!</button>
            <a href="#" className='text-gradient btn-link'>
              I'm Interested!
            </a>
          </motion.div>
          {/* {socials} */}
          <motion.div 
          variants={fadeIn('up', 0.7)} 
          initial="hidden"
          whileInView={'show'} 
          viewport ={{once:false, amount:0.7}}
          className='flex text-[20px] gap-x-6 max-w-max items-center mx-auto lg:mx-0'>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaDribbble />
            </a>
          </motion.div>
          {/* {images} */}
          <motion.div 
          variants={fadeIn('up', 0.5)} 
          initial="hidden"
          whileInView={'show'} 
          className='hidden lg:flex-1 max-w-[320px] 
          lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Banner;
