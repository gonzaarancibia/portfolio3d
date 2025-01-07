import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { textVariant } from '../../utils/motion';

interface SectionCardContainerProps {
  headlineKey: string;
  titleKey: string;
  children: React.ReactNode;
}

const SectionCardContainer: React.FC<SectionCardContainerProps> = ({
  headlineKey,
  titleKey,
  children,
}) => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant(0.1)}>
          <p className={styles.sectionSubText}>{headlineKey}</p>
          <h2 className={styles.sectionHeadText}>{titleKey}</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {children}
      </div>
    </div>
  );
};

export default SectionCardContainer;
