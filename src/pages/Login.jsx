import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="form-container">
    <div className="form-wrapper">
      <span className="logo">Coder Chat</span>
      <span className="title">Login</span>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign in</button>
      </form>
      <p>You don't have an account? <Link to="/register">Register</Link></p>
    </div>
  </div>
  )
}

export default Login
