import styles from './Burger.module.scss';

type Props = {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Burger = ({close}:Props) => {
  return (
    <ul  className={styles.list}> 
      <li className={styles.item}><a href="#about" onClick={()=>{close(false)}}>Обо мне</a></li>
      <li className={styles.item}><a href="#projects" onClick={()=>{close(false)}}>Проекты</a></li>
      <li className={styles.item}><a href="#contacts" onClick={()=>{close(false)}}>Контакты</a></li>
    </ul>
  );
}