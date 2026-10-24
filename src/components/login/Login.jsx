import styles from './Login.module.css'
import appleLogo from '../../assets/icons-apple-logo.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import blossomFlower from '../../assets/blossom-flower.svg'

function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection} aria-label="Login details">
        <div className={styles.leftContent}>
          <h1 className={styles.title}>Welcome back!</h1>
          <p className={styles.subtitle}>Enter your Credentials to access your account</p>
          <form className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="login-email">Email address</label>
              <input
                className={styles.input}
                id="login-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>
            <div className={styles.field}>
              <div className={styles.passwordLabelRow}>
                <label className={styles.label} htmlFor="login-password">Password</label>
                <a className={styles.forgotPassword} href="#forgot-password">forgot password</a>
              </div>
              <input
                className={styles.input}
                id="login-password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>
            <label className={styles.terms}>
              <input className={styles.checkbox} type="checkbox" name="remember" />
              <span>Remember for 30 days</span>
            </label>
            <button className={styles.submit} type="submit">Login</button>
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

export default Login
