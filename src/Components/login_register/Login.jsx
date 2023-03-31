import React, { useState } from "react";
import './login_register.css'
import {auth} from '../../firebase';
import Navbar from '../Navbar/Navbar'
import {signInWithEmailAndPassword} from "firebase/auth";
import Snackbar from "../Snackbar/Snackbar";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password)
          .then ((userCredential, error) => {
            console.log(userCredential);
          });
       
        } catch (error) {
          console.error(error);
        }
      };


    return (
  <>
  <Navbar/>
        <div className="apple">
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">Log In</button>
               {/* <Snackbar message = 'Action Completed!' type = 'success'/> */}
            </form>
            <a href="/register">Don't have an account? Register here.</a>
        </div>
        </div>
        </>
    )
}

export default Login;