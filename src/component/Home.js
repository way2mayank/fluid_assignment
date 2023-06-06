import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Layout';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = localStorage.getItem('user');
      if (user) {
        const User = JSON.parse(user);
        setUser(User);
      }
    };

    getUser();
  }, []);

  return (
    <Navbar>
      {user ? <h3>User : {user.name}</h3> : null}
    </Navbar>
  );
};

export default Home;
