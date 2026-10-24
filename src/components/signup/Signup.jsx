import styles from './Signup.module.css'
import blossomFlower from '../../assets/blossom-flower.svg'

function Signup() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection} aria-label="Sign up details">
        <div className={styles.leftContent}>
          <h1 className={styles.title}>Get Started Now</h1>
          <form className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="signup-name">Name</label>
              <input
                className={styles.input}
                id="signup-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="signup-email">Email address</label>
              <input
                className={styles.input}
                id="signup-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="signup-password">Password</label>
              <input
                className={styles.input}
                id="signup-password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="new-password"
              />
            </div>
            <label className={styles.terms}>
              <input className={styles.checkbox} type="checkbox" name="terms" />
              <span>I agree to the <a href="#terms">terms &amp; policy</a></span>
            </label>
            <button className={styles.submit} type="submit">Signup</button>
          </form>
        </div>
      </section>
      <section className={styles.rightSection} aria-label="Blossom illustration">
        <img className={styles.blossom} src={blossomFlower} alt="Blossom flowers" />
      </section>
    </main>
  )
}

export default Signup
