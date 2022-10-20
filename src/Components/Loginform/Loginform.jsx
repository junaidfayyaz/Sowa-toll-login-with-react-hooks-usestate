import React, { useState } from 'react';
import './Loginform.css'
function Loginform({ Login, error }) {
    const [details, setdetails] = useState({ name: "", email: "", password: "" });
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
  return (
    <form className="login-form" onSubmit={submitHandler}>
      <h2>Login</h2>
          {(error !== "") ? (<div className='error'>{ error }</div>) : ""}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setdetails({ ...details, name: e.target.value })}
          value={details.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setdetails({ ...details, email: e.target.value })}
          value={details.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setdetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
}

export default Loginform








// if (
//       details.email == adminuser.email &&
//       details.password == adminuser.password
//     )
//     console.log("Logged in");

//     else {
//       console.log("Details do not match!");
//     }
//       setUser({
//       name: details.name,
//       email: details.email
//       });
//     setError("Details do not match!");
//   }
//   const Logout = () => {
//     console.log("Logout");
//   }