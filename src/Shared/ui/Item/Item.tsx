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
      <div className={styles.top}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{description}</p>
          <a href={link} target='blank' className={styles.btn}>Перейти</a>
      </div>
      <a href={link} target='blank' className={styles.link}>
         <img src={img} className={styles.img}></img>
      </a>
      <div className={styles.bottom}>
          <h3 className={styles.title}>Использовались</h3>
            <ul className={styles.list}>
              {list}
            </ul>
      </div>
    </li>
  );
}