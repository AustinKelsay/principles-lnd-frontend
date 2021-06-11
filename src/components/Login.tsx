import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import "./components.scss"

const Login = (props: any) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: any) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const loginReq = (e: any) => {
        e.preventDefault();
        setButtonDisabled(true)


        axios
          .post(
            'https://priciples-lnd.herokuapp.com/auth/login',
            credentials
          )
          .then((res: any) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            setButtonDisabled(false)
            props.history.push('/');
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
              <button disabled={buttonDisabled} onClick={loginReq}>Login</button>
            </form>
          </div>
          <br />
          <div>
            <h3>Don't have an account?</h3>
            <Link to="/register">
              Register
            </Link>
          </div>
        </div>
    )
}

export default Login