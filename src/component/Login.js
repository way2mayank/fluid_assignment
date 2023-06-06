import React, { useState } from "react";
import Layout from "./Navbar/Layout";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.success && res.data.user.isAdmin) {
        navigate("/userdetails");
      } else if (res.data.success && !res.data.user.isAdmin) {
        navigate("/");
      }
      alert("User logged in successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Layout>
      <div className="login_form">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>

          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <input type="reset" value="Reset" />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </Layout>
  );
};

export default Login;
