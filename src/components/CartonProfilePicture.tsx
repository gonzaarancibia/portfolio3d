import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { logocarton } from '../assets';

const CartonProfilePicture: React.FC = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn(undefined, undefined, 1, 1)}
        className="w-full flex justify-center items-end h-[77vh]">
        <img
          src={logocarton}
          alt="Animated Logo"
          className="w-auto object-contain rounded-xl"
        />
      </motion.div>
    </>
  );
};

export default CartonProfilePicture;
