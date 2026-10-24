import styles from './Signup.module.css'
import blossomFlower from '../../assets/blossom-flower.svg'

function Signup() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection} aria-label="Sign up details">
        <div className={styles.leftContent}>
          <h1 className={styles.title}>Get Started Now</h1>
        </div>
      </section>
      <section className={styles.rightSection} aria-label="Blossom illustration">
        <img className={styles.blossom} src={blossomFlower} alt="Blossom flowers" />
      </section>
    </main>
  )
}

export default Signup
