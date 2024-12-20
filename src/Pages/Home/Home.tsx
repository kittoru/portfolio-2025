import styles from './Home.module.scss';
import { About, Footer, Header, Hero, Projects } from "../../Widgets"


export const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}