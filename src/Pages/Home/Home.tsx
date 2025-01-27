import styles from './Home.module.scss';
import { About, Footer, Header, Hero, Projects } from "../../Widgets"
import { ArrowUp } from '../../Shared';


export const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ArrowUp />
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}