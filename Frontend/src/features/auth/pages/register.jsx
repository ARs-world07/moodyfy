import React, { useState } from 'react'
import "../style/form.scss"
import { Link, useNavigate } from 'react-router'
import FromGroup from '../components/FromGroup'
import { useAuth } from '../hooks/useAuth'

const register = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { loading, handleRegister } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()                  // for stop realoding page when form is submitted
    await handleRegister({username, email, password })
    navigate("/")
  }


  return (
    <main className='form-page'>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <FromGroup
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            label="Username" 
            placeholder="Enter username"
          />
          <FromGroup 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            label="Email" 
            placeholder="Enter email address"
          />
          <FromGroup 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            label="Password" 
            placeholder="Enter password" 
          />
          <button className='button' type='submit'>Register</button>
          <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
        </form>
      </div>
    </main>
  )
}

export default register