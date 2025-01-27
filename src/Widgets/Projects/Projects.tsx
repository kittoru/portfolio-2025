import { useState } from 'react';
import { Item } from '../../Shared';
import { technologyArr } from './constants';
import styles from './Projects.module.scss';
import { AnimatePresence, motion } from 'motion/react';

export const Projects = () => {
  const [indexProject, setIndexProject] = useState<number>(0);
  const list = technologyArr.map(item => {
    return <Item key={item.id} id={item.id} name={item.name} description={item.description} img={item.img} technology={item.technology} link={item.link} />
  });

  const points = technologyArr.map((item, index) => {
    const changeItem = () => {
      setIndexProject(index);
    }
    return <li key={item.id} className={styles.point}>
      <motion.button  className={styles.pointBtn} initial={{ scale: 1 }} animate={(indexProject === index)? {scale: 1.5, opacity: 1}: {opacity: 0.3}} exit={{ scale: 1 }} onClick={changeItem}></motion.button>
    </li>
  })

  const moveNext = ():void => {
    if(indexProject < list.length - 1) {
      setIndexProject(indexProject + 1);
      return;
    } 
    setIndexProject(0);
  };

  const moveBack = ():void => {
    if(indexProject != 0) {
      setIndexProject(indexProject - 1);
      return;
    }
    setIndexProject(list.length - 1);
  };
  
  return ( 
    <motion.section initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: 1, delay: 0.5}}} viewport={{once: true}} className={styles.projects} id='projects'>
      <div className="container">
        <div className={styles.inner}>
          <motion.h2 initial={{opacity: 0, y: 20}} whileInView={{opacity:1, y: 0, transition: {duration: 1, delay: 0.7}}} viewport={{once: true}} className={styles.title}>Проекты</motion.h2>
          <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity:1, y: 0, transition: {duration: 1, delay: 1}}} viewport={{once: true}}  className={styles.content}>
            <motion.button whileHover={{ scale: 1.2 }} transition={{duration: 0.5}} className={styles.btn} onClick={moveBack}>
              <span className={styles.back}></span>
              <span className={styles.back}></span>
            </motion.button>
            <ul className={styles.list}>
              <AnimatePresence mode='wait'>
                {list[indexProject]}
              </AnimatePresence>
            </ul>
            <motion.button whileHover={{ scale: 1.2 }} transition={{duration: 0.5}} className={styles.btn} onClick={moveNext}>
            <span className={styles.next}></span>
            <span className={styles.next}></span>
            </motion.button>
          </motion.div>
          <motion.ul initial={{opacity: 0, y: 20}} whileInView={{opacity:1, y: 0, transition: {duration: 1, delay: 1.3}}} viewport={{once: true}} className={styles.scroll}>
            {points}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
}