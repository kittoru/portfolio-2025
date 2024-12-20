import { useState } from 'react';
import { Item } from '../../Shared';
import { technologyArr } from './constants';
import styles from './Projects.module.scss';

export const Projects = () => {
  const [index, setIndex] = useState<number>(0);
  const list = technologyArr.map(item => {
    return <Item id={item.id} name={item.name} description={item.description} img={item.img} technology={item.technology} link={item.link} />
  });

  const points = technologyArr.map((item, index) => {
    const changeItem = () => {
      setIndex(index);
    }
    return <li key={item.id} className={styles.point}>
      <button  className={styles.pointBtn} onClick={changeItem}></button>
    </li>
  })

  const moveNext = ():void => {
    if(index < list.length - 1) {
      setIndex(index + 1);
      return;
    } 
    setIndex(0);
  };

  const moveBack = ():void => {
    if(index != 0) {
      setIndex(index - 1);
      return;
    }
    setIndex(list.length - 1);
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
              {list[index]}
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