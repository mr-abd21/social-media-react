import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './login.scss';
import { AuthContext } from '../../context/authContext';

export default function Login() {

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }
  return (
    <div className='login'>
        <div className="card">
        <div className="left">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sunt totam fugit temporibus, cupiditate praesentium consectetur faci</p>
          <span>Don't you have any account</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
        </div>
    </div>
  )
}
