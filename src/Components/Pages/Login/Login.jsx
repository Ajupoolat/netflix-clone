import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "../../../assets/logo.png";
import { login, signup } from "../../../firebase";
import netflix_spinner from '../../../assets/netflix_spinner.gif'

function Login() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const[signin, setsingnin] = useState("Sign In");
  const[loading,setloading]=useState(false)

  const user_auth=async(event)=>{
event.preventDefault()
setloading(true)

if(signin==='Sign In'){
   
  await login(email,password)
  
}else{
  await signup(name,email,password)
  
}
setloading(false)
  }
  return (
    loading?<div className="login-spinner">
    <img src={netflix_spinner} alt="" />
    </div>:
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signin}</h1>
        <form action="">
          {signin === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setname(e.target.value)
              }}
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
             setemail( e.target.value)
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword( e.target.value)
            }}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">{signin}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-swicth">
          {signin === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setsingnin("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span onClick={() => setsingnin("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
