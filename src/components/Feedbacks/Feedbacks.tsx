import React from 'react';

import { SectionWrapper } from '../../hoc';
import { testimonials } from '../../constants';
import { useTranslation } from 'react-i18next';
import SectionCardContainer from '../common/SectionCardContainer';
import { FeedbackCard } from './FeedbackCard';

// Define interfaces for props and testimonial data
interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const Feedbacks: React.FC = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const from = language.includes('en') ? 'of' : 'de';

  return (
    <SectionCardContainer
      headlineKey={t('work.testimonials.headline')}
      titleKey={t('work.testimonials.title')}>
      {testimonials.map((testimonial: Testimonial, index) => {
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
    </SectionCardContainer>
  );
};

export default SectionWrapper(Feedbacks, '');
