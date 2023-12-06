import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const Home = (props) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <div>
        <h1>
          <Link to="./login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="./signup">Signup</Link>
        </h1>
      </div>
      <br />
      <br />
      <br />

      {props.name ? (
        <>
          <h2>{`Welcome - ${props.name}`}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h2>Login Please</h2>
      )}
    </div>
  );
};

export default Home;
