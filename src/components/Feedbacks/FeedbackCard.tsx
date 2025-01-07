import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designationAndCompany: string;
  image: string;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  index,
  testimonial,
  name,
  designationAndCompany,
  image,
}) => (
  <motion.div
    variants={fadeIn(undefined, 'spring', index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <div className="text-white tracking-wider text-[18px] max-h-[150px] overflow-y-auto">
        {testimonial}
      </div>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designationAndCompany}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);
