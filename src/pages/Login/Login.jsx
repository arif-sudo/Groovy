import React from 'react'
import './Login.css'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const data = {
    username: "info_info",
    password: 'info123'
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState('danger')
  const [alertText, setAlertText] = useState('')
  const userInp = document.getElementById('username')
  const passwInp = document.getElementById('password')
  const navigate = useNavigate()

  
  

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username === data.username && password === data.password) {
      navigate('/dashboard')
    }else {
      setAlert('alert')
      setAlertText('Wrong input!')
    }

    userInp.value = ''
    passwInp.value = ''
  }
  // console.log(data.password)
  return (
    <>
      <div className="container ">
        <h1 className='text-center'>Login Page</h1>
        <div className="row">
          <div className={`${alert} alert-danger text-center mb-5`} role="alert">
            {alertText}
          </div>

          <div className="col-12 login_hero">
            <form action="/login" onSubmit={handleSubmit} >

              <div className="username mb-3">
                <label htmlFor="username" className='d-flex' ><i className="myicon me-3 fa-solid fa-user"></i>Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" id='username' name="username" placeholder='Enter the username' required />
              </div>

              <div className="password">
                <label htmlFor="password" className='d-flex' ><i className="myicon me-3 fa-solid fa-lock"></i>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id='password' name='password' placeholder="Enter the password" required />
              </div>

              <div className="login_btn mt-5">
                <input className='btn btn-info' id='btn' type="submit" value="Login" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login