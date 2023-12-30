import React from 'react'
import './register.scss';
export default function Register() {
  return (
    <div className='register'>
        <div className="card">
        <div className="left">
          <h1>Hello</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sunt totam fugit temporibus, cupiditate praesentium consectetur faci</p>
          <span>Do you have any account</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='Password'/>
            <input type="email" placeholder='email'/>
            <input type="text" placeholder='name'/>
            <button>Register</button>
          </form>
        </div>
        </div>
    </div>
  )
}
