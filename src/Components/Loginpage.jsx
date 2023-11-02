import React, { useState , } from "react";
import {  useNavigate } from "react-router-dom";

import axios from "axios";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");


  const navigate = useNavigate()

  const handleLogin = async () => {
    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post("https://reqres.in/api/login", loginData);
      console.log(response.data.token)
      if (response.status === 200) {
         setToken()
        navigate('/read'); // Redirect to DashboardPage on successful login
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="App">
      <h1>Login with React.js</h1>
      <div>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <div> <span>Token:{token}</span></div>
      </div>
    </div>
  );
}

export default Loginpage;
