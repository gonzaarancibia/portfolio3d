import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  graphql,
  docker,
  chatgpt,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  ycapp,
  portfolio,
  postgresql,
  jest,
  reactnative,
  // Certifications
  certTypescript,
  certAccesibilityWeb,
  certCSSArquitecture,
  certJSComplexity,
  certGithubActions,
  certJSFundation,
  introductionDesignPattern,
  jsEngineV8,
  advancedReact,
} from '../assets';
import rafaIcon from '../assets/rafa-icon-image.jpg';
import jordi from '../assets/jordi.jpeg';
import matias from '../assets/matias.jpeg';
import alejandro from '../assets/alejandro.jpeg';
import martin from '../assets/martin.jpeg';
import coach from '../assets/coach.png';
import gab from '../assets/gab.jpeg';
import bluemedlar from '../assets/bluemedlar.jpeg';
import meli from '../assets/meli.jpeg';
import revai from '../assets/revai.jpeg';

type NavLink = {
  id: string;
  title: string;
};

export const navLinks: NavLink[] = [
  {
    id: 'about',
    title: 'navBar.about',
  },
  {
    id: 'work',
    title: 'navBar.work',
  },
  {
    id: 'contact',
    title: 'navBar.contact',
  },
];

type Service = {
  title: string;
  icon: string;
};

const services: Service[] = [
  {
    title: 'Front End Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile Developer',
    icon: mobile,
  },
  {
    title: 'about.services.coach',
    icon: creator,
  },
];

type Technology = {
  name: string;
  icon: string;
};

const technologies: Technology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Graphql',
    icon: graphql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Postgresql',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Jest',
    icon: jest,
  },
  {
    name: 'React native',
    icon: reactnative,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'ChatGPT',
    icon: chatgpt,
  },
];

type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    title: 'work.workExperience.coach.title',
    company_name: 'work.workExperience.coach.company',
    icon: coach,
    iconBg: '#ffffff',
    date: 'work.workExperience.coach.date',
    points: [
      'work.workExperience.coach.point1',
      'work.workExperience.coach.point2',
      'work.workExperience.coach.point3',
      'work.workExperience.coach.point4',
      'work.workExperience.coach.point5',
      'work.workExperience.coach.point6',
    ],
  },
  {
    title: 'work.workExperience.growthPartner.title',
    company_name: 'work.workExperience.growthPartner.company',
    icon: gab,
    iconBg: '#F2EFE8',
    date: 'work.workExperience.growthPartner.date',
    points: [
      'work.workExperience.growthPartner.point1',
      'work.workExperience.growthPartner.point2',
      'work.workExperience.growthPartner.point3',
      'work.workExperience.growthPartner.point4',
    ],
  },
  {
    title: 'work.workExperience.devBluemedlar.title',
    company_name: 'work.workExperience.devBluemedlar.company',
    icon: bluemedlar,
    iconBg: '#3C56E9',
    date: 'work.workExperience.devBluemedlar.date',
    points: [
      'work.workExperience.devBluemedlar.point1',
      'work.workExperience.devBluemedlar.point2',
      'work.workExperience.devBluemedlar.point3',
      'work.workExperience.devBluemedlar.point4',
    ],
  },
  {
    title: 'work.workExperience.devMeli.title',
    company_name: 'work.workExperience.devMeli.company',
    icon: meli,
    iconBg: '#ffffff',
    date: 'work.workExperience.devMeli.date',
    points: [
      'work.workExperience.devMeli.point1',
      'work.workExperience.devMeli.point2',
      'work.workExperience.devMeli.point3',
      'work.workExperience.devMeli.point4',
      'work.workExperience.devMeli.point5',
      'work.workExperience.devMeli.point6',
    ],
  },
  {
    title: 'work.workExperience.devRevai.title',
    company_name: 'work.workExperience.devRevai.company',
    icon: revai,
    iconBg: '#ffffff',
    date: 'work.workExperience.devRevai.date',
    points: [
      'work.workExperience.devRevai.point1',
      'work.workExperience.devRevai.point2',
      'work.workExperience.devRevai.point3',
      'work.workExperience.devRevai.point4',
    ],
  },
];

type Testimonial = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    testimonial: 'work.testimonials.rafael.testimonial',
    name: 'work.testimonials.rafael.name',
    designation: 'work.testimonials.rafael.designation',
    company: 'work.testimonials.rafael.company',
    image: rafaIcon,
  },
  {
    testimonial: 'work.testimonials.jordi.testimonial',
    name: 'work.testimonials.jordi.name',
    designation: 'work.testimonials.jordi.designation',
    company: 'work.testimonials.jordi.company',
    image: jordi,
  },
  {
    testimonial: 'work.testimonials.matias.testimonial',
    name: 'work.testimonials.matias.name',
    designation: 'work.testimonials.matias.designation',
    company: 'work.testimonials.matias.company',
    image: matias,
  },
  {
    testimonial: 'work.testimonials.alejandro.testimonial',
    name: 'work.testimonials.alejandro.name',
    designation: 'work.testimonials.alejandro.designation',
    company: 'work.testimonials.alejandro.company',
    image: alejandro,
  },
  {
    testimonial: 'work.testimonials.martin.testimonial',
    name: 'work.testimonials.martin.name',
    designation: 'work.testimonials.martin.designation',
    company: 'work.testimonials.martin.company',
    image: martin,
  },
];
type Project = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
};

const projects: Project[] = [
  {
    name: 'work.projects.yc-directory.title',
    description: 'work.projects.yc-directory.description',
    tags: [
      {
        name: 'next.js 15',
        color: 'green-text-gradient',
      },
      {
        name: 'react 19',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: ycapp,
    source_code_link:
      'https://github.com/gonzaarancibia/yc_directory/tree/main',
  },
  {
    name: 'work.projects.3d-portfolio.title',
    description: 'work.projects.3d-portfolio.description',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Three.js',
        color: 'green-text-gradient',
      },
      {
        name: 'Vite',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/gonzaarancibia/portfolio3d',
  },
];

type Certification = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
};

const certifications: Certification[] = [
  {
    name: 'work.certifications.items.ts-workshop.title',
    description: 'work.certifications.items.ts-workshop.description',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
    ],
    image: certTypescript,
    source_code_link: '',
  },
  {
    name: 'work.certifications.items.accesibility-web.title',
    description: 'work.certifications.items.accesibility-web.description',
    tags: [
      {
        name: 'WCAG',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML semántico',
        color: 'blue-text-gradient',
      },
      {
        name: 'ARIA',
        color: 'green-text-gradient',
      },
    ],
    image: certAccesibilityWeb,
    source_code_link:
      'https://platzi.com/p/Bochamen/curso/1802-course/diploma/detalle/',
  },
  {
    name: 'work.certifications.items.css-architecture.title',
    description: 'work.certifications.items.css-architecture.description',
    tags: [
      {
        name: 'BEM',
        color: 'blue-text-gradient',
      },
      {
        name: 'OOCSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Atomic Design',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: certCSSArquitecture,
    source_code_link:
      'https://platzi.com/p/Bochamen/curso/7991-course/diploma/detalle/',
  },
  {
    name: 'work.certifications.items.algorithmic-complexity-js.title',
    description:
      'work.certifications.items.algorithmic-complexity-js.description',
    tags: [
      {
        name: 'BigO',
        color: 'blue-text-gradient',
      },
      {
        name: 'Algorithms',
        color: 'blue-text-gradient',
      },
      {
        name: 'Algorithmic Complexity',
        color: 'green-text-gradient',
      },
    ],
    image: certJSComplexity,
    source_code_link:
      'https://platzi.com/p/Bochamen/curso/2517-course/diploma/detalle/',
  },
  {
    name: 'work.certifications.items.github-actions.title',
    description: 'work.certifications.items.github-actions.description',
    tags: [
      {
        name: 'CICD',
        color: 'blue-text-gradient',
      },
      {
        name: 'Automation',
        color: 'blue-text-gradient',
      },
      {
        name: 'pipelines',
        color: 'green-text-gradient',
      },
    ],
    image: certGithubActions,
    source_code_link: 'https://platzi.com/cursos/github-actions/',
  },
  {
    name: 'work.certifications.items.js-fundamentals.title',
    description: 'work.certifications.items.js-fundamentals.description',
    tags: [],
    image: certJSFundation,
    source_code_link:
      'https://platzi.com/p/Bochamen/curso/10266-course/diploma/detalle/',
  },
  {
    name: 'work.certifications.items.software-design-patterns.title',
    description:
      'work.certifications.items.software-design-patterns.description',
    tags: [],
    image: introductionDesignPattern,
    source_code_link:
      'https://platzi.com/p/Bochamen/curso/6735-course/diploma/detalle/',
  },
  {
    name: 'work.certifications.items.js-engine-v8.title',
    description: 'work.certifications.items.js-engine-v8.description',
    tags: [],
    image: jsEngineV8,
    source_code_link:
      'https://platzi.com/p/Bochamen/curso/1798-course/diploma/detalle/',
  },
  {
    name: 'work.certifications.items.advanced-react.title',
    description: 'work.certifications.items.advanced-react.description',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'clean code',
        color: 'blue-text-gradient',
      },
      {
        name: 'performance',
        color: 'green-text-gradient',
      },
    ],
    image: advancedReact,
    source_code_link:
      'https://platzi.com/p/Bochamen/curso/11223-course/diploma/detalle/',
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  certifications,
  projects,
};
