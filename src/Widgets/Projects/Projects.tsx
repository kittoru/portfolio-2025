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
    <section className={styles.projects} id='projects'>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>Проекты</h2>
          <div className={styles.content}>
            <button className={styles.btn} onClick={moveBack}>
              <span className={styles.back}></span>
              <span className={styles.back}></span>
            </button>
            <ul className={styles.list}>
              <AnimatePresence mode='wait'>
                {list[indexProject]}
              </AnimatePresence>
            </ul>
            <button className={styles.btn} onClick={moveNext}>
            <span className={styles.next}></span>
            <span className={styles.next}></span>
            </button>
          </div>
          <ul className={styles.scroll}>
            {points}
          </ul>
        </div>
      </div>
    </section>
  );
}