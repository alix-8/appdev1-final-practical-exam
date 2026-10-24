import styles from './Login.module.css'
import appleLogo from '../../assets/icons-apple-logo.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
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

          <div className={styles.bottomSection}>
            <div className={styles.divider}>
              <span />
              <span className={styles.dividerText}>Or</span>
              <span />
            </div>
            <div className={styles.socialButtons}>
              <button className={styles.socialButton} type="button">
                <img src={googleLogo} alt="" />
                <span>Sign in with Google</span>
              </button>
              <button className={styles.socialButton} type="button">
                <img src={appleLogo} alt="" />
                <span>Sign in with Apple</span>
              </button>
            </div>
            <p className={styles.accountPrompt}>
              Have an account? <a href="#signin">Sign In</a>
            </p>
          </div>
        </div>
      </section>
      <section className={styles.rightSection} aria-label="Blossom illustration">
        <img className={styles.blossom} src={blossomFlower} alt="Blossom flowers" />
      </section>
    </main>
  )
}

export default Signup
