import React from 'react'
import './login.scss';

export default function Login() {
  return (
    <div className='login'>
        <div className="card">
        <div className="left">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sunt totam fugit temporibus, cupiditate praesentium consectetur faci</p>
          <span>Don't you have any account</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button>Login</button>
          </form>
        </div>
        </div>
    </div>
  )
}
