
import { useState } from 'react';
import styles from './About.module.scss';
import { list } from './constants';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';


export const About = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const { scrollYProgress } = useScroll();
  // const scale = useTransform(scrollYProgress, scrollDirection === 'down'? [0.4, 1]: [0, 0.2], scrollDirection === 'down'? [1, 0.6]: [0.6, 1]);
  // const opacity = useTransform(scrollYProgress, scrollDirection === 'down'? [0.4, 1]: [0, 0.2], scrollDirection === 'down'? [1, 0]: [0, 1]);

  useMotionValueEvent(scrollYProgress, 'change', (val) => {
    setScrollDirection(val > 0.5 ? 'down' : "up")
  });

  const skills = list.map((item,index) => {
    return <motion.li key={index} className={styles.item}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
    >
      {item}
    </motion.li>
  })

  return <motion.section initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 2, delay: 0.5}}} viewport={{once: true}} className={styles.about} id='about'>
    <div className="container">
      <div className={styles.inner}>
        <div className={styles.left}>
          <motion.h2 initial={{opacity: 0, y: 20}} whileInView={{ opacity: 1, y: 0, transition: {duration: 1, delay: 0.5}}} viewport={{once: true}} className={styles.title}>Технологии, с которыми я работала</motion.h2>
          <motion.p initial={{opacity: 0, y: 20}} whileInView={{ opacity: 1, y: 0, transition: {duration: 1, delay: 0.7}}} viewport={{once: true}} className={styles.text}>
            В своих pet-проектах я использовала разные технологии и подходы. Изначально я изучала ванильную вёрстку, но попробовав однажды React, поняла, что хочу и дальше работать с ним.
          </motion.p> 
        </div>
        <motion.ul initial={{opacity: 0, y: 20}} whileInView={{ opacity: 1, y: 0, transition: {duration: 1, delay: 1}}} viewport={{once: true}} className={styles.skills}>{skills}</motion.ul>
      </div>
    </div>
  </motion.section>
}