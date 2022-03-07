import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

export const LoginForm = ({setRole}) => {
    console.log('Login form rendered');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleRole = (event) => {
      if (username === registeredUser.username && password === registeredUser.password){
        setRole("Admin");
      } else {
      setRole("Visitor")
      }
    }
    
    const registeredUser = {
        username: "admin",
        password: "admin",
      };
    const form = (
        <div className="login-form">
            <h1>Login</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRole}>
                Login
            </button>
        </div>
    );
    return form;
};

export default LoginForm;