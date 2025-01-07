import React from 'react';

import { SectionWrapper } from '../../hoc';
import { certifications } from '../../constants';
import { useTranslation } from 'react-i18next';
import { CertificationCard } from './CertificationCard';
import SectionCardContainer from '../common/SectionCardContainer';

const Certifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionCardContainer
      headlineKey={t('work.certifications.headline')}
      titleKey={t('work.certifications.title')}>
      <div className="max-h-[70vh]  overflow-y-auto flex  flex-wrap gap-7 w-full">
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
    </SectionCardContainer>
  );
};

export default SectionWrapper(Certifications, '');
