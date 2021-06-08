import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import "./components.scss"

const Login = () => {
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
        <div className="login_container">
          <h1>Login</h1>
          <div>
            <form className="login_form" onSubmit={loginReq}>
              <label>
                {' '}
                Username
                <input
                  className="login_input"
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                />
              </label>
              <label>
                Password
                <input
                  className="login_input"
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </label>

              <br />
              <button>Login</button>
            </form>
          </div>
          <br />
          <div>
            <h3>Don't have an account?</h3>
            <Link to="/register" className="log_link">
              Register
            </Link>
          </div>
        </div>
    )
}

export default Login