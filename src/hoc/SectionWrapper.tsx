import { motion, Variants } from 'framer-motion';
import { FC } from 'react';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// interface SectionWrapperProps {
//   idName: string;
// }

const SectionWrapper = <T extends FC<React.ComponentProps<T>>>(
  Component: T,
  idName: string,
) => {
  const HOC: FC<React.ComponentProps<T>> = (props) => {
    const variants: Variants = staggerContainer();

    return (
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {/* @ts-expect-error: n/a */}
        <Component {...props} />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;
