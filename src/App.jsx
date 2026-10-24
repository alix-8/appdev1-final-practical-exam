import Login from './components/login/Login.jsx'
import Signup from './components/signup/Signup.jsx'

function App() {
  const isSignupPage = window.location.pathname === '/signup'
  return isSignupPage ? <Signup /> : <Login />
}

export default App