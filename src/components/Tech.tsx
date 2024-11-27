import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';
import useGetDeviceType from './hooks/useGetDeviceType';

interface Technology {
  name: string;
  icon: string;
}

const Tech: React.FC = () => {
  const deviceType = useGetDeviceType();
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies?.map((technology: Technology) => {
        if (deviceType === 'android') {
          return (
            <div
              className="w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-lg"
              key={technology.name}>
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
            </div>
          );
        } else {
          return (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default SectionWrapper(Tech, '');
