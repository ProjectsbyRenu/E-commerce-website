import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
const Login = () => {

   const [formInfo, setFormInfo] = useState({
      email: "",
      password: ""
     
    });
    const [message, setMessage] = useState("");
    // Handle input change
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormInfo({ ...formInfo, [id]: value });
    };
  
  // const [user, setUser] = useState('');
  // const [password, setPassword] = useState('')

  const loginHandel = async (e) => {
    e.preventDefault();
    try
    {
      const response= await fetch("http://localhost:3001/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formInfo)
      });
       const data = await response.json();
       console.log(data)
       if(data.success){
      alert(data.message);
       window.location.href="/"
       }
       else{
        alert(data.message)
       }
    }
    catch(error){
      setMessage(error)

    }
  };
  

  // const userHandler = (e) => {
  //   const item = e.target.value;
  //   setUser(item);
  // };

  // const passwordHandler = (e) => {
  //   const item = e.target.value;
  //   setPassword(item);
   
  // };

  return (
    <>
    <div className="login">
      <form className="wrapper" onSubmit={loginHandel}>
        <div className="login_box">
          <div className="login-header">
            <span>Login</span>
          </div>
          <div className="input_box">
            <input
            name='email'
              type="email"
              id="email"
              value={formInfo.email}
              onChange={handleChange}
              className="input-field"
              required
            />
            <label htmlFor="email" className="label">
             email
            </label>
          </div>
          <div className="input_box">
            <input
             name='password'
              type="password"
              id="password"
              value={formInfo.password}
              onChange={handleChange}
              className="input-field"
              required
            />
            <label htmlFor="pass" className="label">
              Password
            </label>
          </div>
          {/* <div className="remember-forgot">
            <div className="forgot">
              <a href="#">Forgot password?</a>
            </div>
          </div> */}
          <div className="input_box">
            <input type="submit" className="input-submit" value="Login" />
          </div>
          <div className="register">
            <span>
              Don't have an account? <NavLink to="/SignIn">SignUp</NavLink>
            </span>
          </div>
        </div>
      </form>
      </div>
      
      <Footer></Footer>
  </>
  );
};

export default Login;
