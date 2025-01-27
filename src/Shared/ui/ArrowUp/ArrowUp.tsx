import { motion } from 'motion/react';

import styles from './ArrowUp.module.scss';

export const ArrowUp = () => {
  return ( 
    <motion.a href='#logo' initial={{opacity: 0, y: 20}} animate={{opacity:1, y: 0}} exit={{opacity: 0, y: 20}} transition={{duration: 0.5}} className={styles.btn}>
      <div className={styles.arrow}>
        <span className={styles.side}></span>
        <span className={styles.side}></span>
      </div>
    </motion.a>
  );
}