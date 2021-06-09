import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import "./components.scss"

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: any) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const loginReq = (e: any) => {
        e.preventDefault();
        axios
          .post(
            'https://priciples-lnd.herokuapp.com/auth/login',
            credentials
          )
          .then((res: any) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            // props.addAdmin(res.data.user.admin);
            // history.push('/protected');
          })
          .catch((err: Error) => console.log({ err }));
    };

    return (
        <div className="register_container">
          <h1>Create an account</h1>
          <div>
            <form onSubmit={loginReq}>
              <label>
                {' '}
                Username
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </label>

              <br />
              <button onClick={loginReq}>Submit</button>
            </form>
          </div>
          <br />
          <div>
            <h3>Already have an account?</h3>
            <Link to="/login">
              Login
            </Link>
          </div>
        </div>
    )
}

export default Register