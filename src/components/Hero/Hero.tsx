import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { ComputersCanvas } from '../canvas';
import { Trans, useTranslation } from 'react-i18next';
import CartonProfilePicture from '../CartonProfilePicture';
import useGetDeviceType from '../Hero/hooks/useGetDeviceType';

const Hero: React.FC = () => {
  // @ts-expect-error: We ensure that the component automatically re-renders when i18n.language changes
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { i18n } = useTranslation();
  const deviceType = useGetDeviceType();
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <Trans
              i18nKey="hero.title"
              values={{ name: 'Gonzalo' }}
              components={{ strong: <span className="text-[#915eff]" /> }}
            />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Trans
              i18nKey="hero.description"
              components={{
                lineBreak: <br className="sm:block hidden" />,
              }}
            />
          </p>
        </div>
      </div>
      {deviceType === 'android' ? (
        <CartonProfilePicture />
      ) : (
        <ComputersCanvas />
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
        </a>
      </div>
    </section>
  );
};

export default Hero;
