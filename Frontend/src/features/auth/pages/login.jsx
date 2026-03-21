import React, {useState} from 'react'
import "../style/form.scss"
import { Link, useNavigate } from 'react-router'
import FromGroup from '../components/FromGroup'
import {useAuth} from "../hooks/useAuth"

const login = () => {

    const {loading, handleLogin} = useAuth()

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function handleSubmit(e){
        e.preventDefault()                  // for stop realoding page when form is submitted
        await handleLogin({ email, password})
        navigate("/")
    }

  return (
    <main className='form-page'>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <FromGroup
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    label="Email"
                    placeholder="Enter email address"/>
                <FromGroup
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                    label="Password"
                    placeholder="Enter password"/>
                <button className='button' type='submit'>Login</button>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    </main>
  )
}

export default login