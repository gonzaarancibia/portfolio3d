import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { certifications } from '../constants';
import { useTranslation } from 'react-i18next';
import { Tilt } from 'react-tilt';
import { link } from '../assets';

interface Tag {
  name: string;
  color: string;
}

interface CertificationCardProps {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          {source_code_link ? (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className="bg-slate-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={link}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{t(name)}</h3>
          <p className="mt-2 text-secondary text-[14px]">{t(description)}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] max-sm:min-h-[230px]`}>
        <motion.div variants={textVariant(0.1)}>
          <p className={styles.sectionSubText}>
            {t('work.certifications.headline')}
          </p>
          <h2 className={styles.sectionHeadText}>
            {t('work.certifications.title')}
          </h2>
        </motion.div>
      </div>
      <div className={`-mt-20  pb-14 max-sm:px-2 px-2 flex flex-wrap gap-7`}>
        <div className="max-h-[70vh] overflow-y-auto flex flex-wrap gap-7">
          {certifications.map((certification, index: number) => {
            return (
              <CertificationCard
                key={`certification-${index}`}
                index={index}
                {...certification}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, '');
