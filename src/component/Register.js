import React, { useState } from "react";
import Layout from "./Navbar/Layout";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:8000/register", {
        name,
        email,
        age,
        password,
      });
      if (res) {
        alert("User registered successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="register_form">
        <form onSubmit={handleSubmit}>
          <h3>Register</h3>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <br />
          <label>Age</label>
          <input
            type="text"
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <br />
          <br />
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
            type="text"
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

export default Register;
