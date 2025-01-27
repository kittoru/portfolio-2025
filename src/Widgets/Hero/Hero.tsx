import styles from './Hero.module.scss';
import { motion } from 'motion/react';

export const Hero = () => {

  return <section  className={styles.hero}>
    <div className="container">
      <div className={styles.inner}>
        <div className={styles.left}>
          <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.5}} className={styles.text}>
          Здравствуйте, <br/>
          я Елизавета Гнетнёва
        </motion.p>
        <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 1}} className={styles.subtext}>Junior frontend developer</motion.p>
        </div>
        <div   className={styles.right}>
          <div className={`${styles.back} ${styles.circle}`}>
            <div className={`${styles.center} ${styles.circle}`}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
