import styles from './Burger.module.scss';
import { motion } from 'motion/react';

type Props = {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Burger = ({close}:Props) => {
  return (
    <motion.ul  className={styles.list} 
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ x: '100%' }}
      transition={{ duration: 1, type: 'easy' }}> 
      <li className={styles.item}><a href="#about" onClick={()=>{close(false)}}>Обо мне</a></li>
      <li className={styles.item}><a href="#projects" onClick={()=>{close(false)}}>Проекты</a></li>
      <li className={styles.item}><a href="#contacts" onClick={()=>{close(false)}}>Контакты</a></li>
    </motion.ul>
  );
}