import { motion, useScroll, useTransform } from 'motion/react';


import styles from './ArrowUp.module.scss';

export const ArrowUp = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  return ( 
    <motion.a href='#logo' initial={{opacity: 0}} style={{opacity}} className={styles.btn}>
      <div className={styles.arrow}>
        <span className={styles.side}></span>
        <span className={styles.side}></span>
      </div>
    </motion.a>
  );
}