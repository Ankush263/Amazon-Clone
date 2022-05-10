import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'


import amazon from '../src/images/amazon_PNG1.png'


const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signin = (e) => {
    e.preventDefault()
    
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if(auth) {
          history.push('/')
        }
      })
      .catch(err => alert(err.message))
  }

  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if(auth) {
          history.push('/')
        }
      })
      .catch(err => alert(err.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={amazon} />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signin} className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By Signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Noties and our Internet-Based Ads Notice. 
        </p>
        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login