import React, { useState, useEffect } from "react";
import Layout from "./Navbar/Layout";
import axios from "axios";
import "./User_list.css"

const UserDetails = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/get_users");
      if (response.data) {
        setUsers(...users, response.data.users);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      <div className="user_list">
        {users.length > 0 ? (
          <ul>
            <li>S. No</li>
            <li>Name</li>
            <li>Email</li>
            <li>Age</li>
            {users.map((user, index) => (
              <ul key={index}>
                <li>{index + 1}</li>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.age}</li>
              </ul>
            ))}
          </ul>
        ) : (
          <h1>No users found</h1>
        )}
      </div>
    </Layout>
  );
};

export default UserDetails;
