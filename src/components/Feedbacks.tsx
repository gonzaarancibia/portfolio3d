import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { useTranslation } from 'react-i18next';

// Define interfaces for props and testimonial data
interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designationAndCompany: string;
  image: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  index,
  testimonial,
  name,
  designationAndCompany,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
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

const Feedbacks: React.FC = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            {t('work.testimonials.headline')}
          </p>
          <h2 className={styles.sectionHeadText}>
            {t('work.testimonials.title')}
          </h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial: Testimonial, index: number) => {
          const from = language.includes('en') ? 'of' : 'de';
          const designationAndCompany = `${t(testimonial.designation)} ${from} ${t(testimonial.company)}`;
          return (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              testimonial={t(testimonial.testimonial)}
              name={t(testimonial.name)}
              designationAndCompany={designationAndCompany}
              image={t(testimonial.image)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
