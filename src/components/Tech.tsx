import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../styles.css';
import useGetDeviceType from './hooks/useGetDeviceType';

interface Technology {
  name: string;
  icon: string;
}

const Tech: React.FC = () => {
  const deviceType = useGetDeviceType();

  let maxTechToShow = 6;
  if (deviceType === 'desktop') {
    maxTechToShow = 10;
  }

  // Dividir las tecnologías en grupos de 10 (2 filas x 5 íconos por fila)
  const slides = [];
  for (let i = 0; i < technologies.length; i += maxTechToShow) {
    slides.push(technologies.slice(i, i + maxTechToShow));
  }

  return (
    <div className="w-full flex justify-center">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1} // Mostrar un slide a la vez
        navigation
        pagination={{
          enabled: deviceType === 'desktop' ? false : true,
          clickable: true,
        }}
        className="w-full max-w-4xl">
        {slides.map((group, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center px-20 max-sm:px-0  max-sm:w-[100vw]">
            <div className="grid max-sm:grid-cols-2 grid-cols-5 gap-5  max-sm:w-[77%] w-full place-self-center place-items-center">
              {group.map((technology: Technology) => (
                <div
                  className="flex-col  w-auto max-sm:w-fit"
                  key={technology.name}>
                  <div
                    className="w-28 h-28 max-sm:w-24 max-sm:h-24 place-self-center flex flex-col items-center justify-center bg-white rounded-full shadow-lg"
                    key={technology.name}>
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="text-sm mt-2 font-bold text-center">
                    {technology.name}
                  </p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionWrapper(Tech, '');
