
import styles from './About.module.scss';
import { list } from './constants';

export const About = () => {
  const skills = list.map((item,index) => {
    return <li key={index} className={styles.item}>
      {item}
    </li>
  })

  return <section className={styles.about} id='about'>
    <div className="container">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>Технологии, с которыми я работала</h2>
          <p className={styles.text}>
            В своих pet-проектах я использовала разные технологии и подходы. Изначально я изучала ванильную вёрстку, но попробовав однажды React, поняла, что хочу и дальше работать с ним.
          </p> 
        </div>
        <ul className={styles.skills}>{skills}</ul>
      </div>
    </div>
  </section>
}