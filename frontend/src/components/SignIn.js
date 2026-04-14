import  { useState } from "react";
import "./Sign.css";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    password: ""
   
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    const { username, email,number, password} = formData;

    if (!username) newErrors.username = "Username is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
     if (!number ) newErrors.number = "number is required";
     if(number.length<10 || number.length>10)
      newErrors.number="provide valid number";
    if (!password) newErrors.password = "Password is required";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit =async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
     return;
    } try
    {
      const response= await fetch("http://localhost:3001/signin",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
       const data = await response.json();
       console.log(data)
       if(data.success){
      alert(data.message);
       window.location.href="/"
       }
    }
    catch(error){
      setMessage(error)

    }
  };


  return (
    <>
      <div className="signup">
        <form className="wrapper" onSubmit={handleSubmit}>
          <div className="signup_box">
            <div className="signup-header">
              <span>Sign Up</span>
            </div>
            {/* Username Field */}
            <div className="input_box">
              <input
              name="username"
                type="text"
                id="username"
                className="input-field"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <label htmlFor="username" className="label">
                Username
              </label>
              <i className="bx bx-user icon" />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            {/* Email Field */}
            <div className="input_box">
              <input
                name="email"
                type="email"
                id="email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className="label">
                Email
              </label>
              <i className="bx bx-envelope icon" />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            {/* number field */}
             <div className="input_box">
              <input
                name="number"
                type="number"
                id="number"
                className="input-field"
                value={formData.number}
                onChange={handleChange}
                required
              />
              <label htmlFor="number" className="label">
               Number
              </label>
              <i className="bx bx-envelope icon" />
              {errors.number && <p className="error">{errors.number}</p>}
            </div>
            
            {/* Password Field */}
            <div className="input_box">
              <input
              name="password"
                type="password"
                id="password"
                className="input-field"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password" className="label">
                Password
              </label>
              <i className="bx bx-lock-alt icon" />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
           
            {/* Terms and Conditions
            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">I agree to the Terms and Conditions</label>
              </div>
            </div> */}
            {/* Submit Button */}
            <div className="input_box">
              <input type="submit" className="input-submit" value="Sign Up" />
            </div>
            <div className="register">
             <span>
              Already have an account? <NavLink to="/Login">Login</NavLink>
            </span>
            </div>
            {/* Success or Error Message */}
            {message && <p className="success">{message}</p>}
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SignIn;
