import React from 'react'
// import logo from '../assets/logo1.png';
import { useNavigate } from "react-router-dom";
import '../styles/login.css'

 function Login() {
  const navigate = useNavigate();
  return (
    <div
        className ="wrapper">
        <div className = "header">
        <div className = "logo">  
             <a href="/"> <img src={require('../assets/logo1.png')} alt="logo "/></a>
        </div>
        </div>
        <div className = "login_body">
          <div className="login_box">
            <h2>Sign In</h2>
            <form>
              <div className="input_wrap">
                <input type ="text" placeholder="Email or Phone number"></input>
              </div>
              <div className="input_wrap">
                <input type ="text" placeholder="Password"></input>
              </div>
              <div className="input_wrap">
                <button
                onClick={()=>{
                navigate("/Home");
                }}
                >Sign In</button>
              </div> 
              <div className='support'>
                <div className ='remember' >
                  <span><input type = "checkbox"></input></span>
                  <span>Remember me</span>
                </div>
                <div className="need_help">Need help?</div>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Login;