// type AnimationProps = {
//   delay: number;
//   direction?: 'left' | 'right' | 'up' | 'down';
//   type?: 'spring' | 'tween' | 'easeOut';
//   duration?: number;
//   staggerChildren?: boolean;
//   delayChildren?: number;
// };

export const textVariant = (delay: number) => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay: delay,
    },
  },
});

export const fadeIn = (
  direction: 'left' | 'right' | 'up' | 'down' = 'up', // Default direction to 'up'
  type: 'spring' | 'tween' | 'easeOut' = 'spring', // Default type to 'spring'
  delay: number = 0, // Default delay to 0
  duration: number = 1, // Default duration to 1
) => {
  const xDirection =
    direction === 'left' ? 100 : direction === 'right' ? -100 : 0;
  const yDirection = direction === 'up' ? 100 : direction === 'down' ? -100 : 0;

  return {
    hidden: {
      x: xDirection,
      y: yDirection,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const zoomIn = (delay: number = 0, duration: number = 1) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay: delay,
      duration: duration,
      ease: 'easeOut',
    },
  },
});

export const slideIn = (
  direction: 'left' | 'right' | 'up' | 'down' = 'left', // Default to 'left'
  type: 'spring' | 'tween' | 'easeOut' = 'spring', // Default to 'spring'
  delay: number = 0, // Default delay to 0
  duration: number = 1, // Default duration to 1
) => {
  const xDirection =
    direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0;
  const yDirection =
    direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0;

  return {
    hidden: {
      x: xDirection,
      y: yDirection,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: boolean = true, // Default staggerChildren to true
  delayChildren: number = 0, // Default delayChildren to 0
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren,
      delayChildren: delayChildren,
    },
  },
});
