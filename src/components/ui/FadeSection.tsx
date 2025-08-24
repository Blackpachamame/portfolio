import { motion, useReducedMotion } from 'framer-motion';
import type { ComponentProps } from 'react';

type FadeSectionProps = ComponentProps<typeof motion.section>;

export function FadeSection({ initial, animate, exit, ...rest }: FadeSectionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      initial={reduce ? {} : (initial ?? { opacity: 0 })}
      animate={reduce ? {} : (animate ?? { opacity: 1 })}
      exit={reduce ? {} : (exit ?? { opacity: 0 })}
      {...rest}
    />
  );
}
