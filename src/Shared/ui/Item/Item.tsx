import { motion } from 'motion/react';
import styles from './Item.module.scss';

type Props = {
  id: number;
  name: string;
  description: string;
  img: string;
  technology: string[];
  link: string;
};

export const Item = ({id, name, description, img, technology, link}: Props) => {
  const list = technology.map((item, index) => {
    return <li key={index} className={styles.str}>{item}</li>;
  })
  return ( 
    <li key={id} className={styles.item}>
      <motion.div className={styles.top} initial={{ opacity: 0, x: "-100%" }} animate={{ opacity: 1, x: '0%'}} exit={{ opacity: 0, x: "-100%" }} transition={{ duration: 1 }}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{description}</p>
          <motion.a href={link} target='blank' className={styles.btn} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>Перейти</motion.a>
      </motion.div>
      <motion.a href={link} target='blank' className={styles.link} 
        initial={{ scale: 0, opacity: 0}} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 1 }}
        exit={{ scale: 0, opacity: 0 }}>
         <motion.img src={img} className={styles.img}
          animate={{ rotate: [15, -15] }} transition={{ duration: 4, ease: 'anticipate', repeat: Infinity, repeatType: "reverse" }}
         ></motion.img>
      </motion.a>
      <motion.div className={styles.bottom} initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: '0%'}} exit={{ opacity: 0, x: "100%" }} transition={{ duration: 1 }}>
          <h3 className={styles.title}>Технологии</h3>
            <ul className={styles.list}>
              {list}
            </ul>
      </motion.div>
    </li>
  );
}