import React, { useState } from 'react';
import {Tooltip} from "reactstrap";
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios'
import "./components.scss"

const Register = (props: any) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        host: '',
        cert: '',
        macaroon: '',
        pubkey: ''
    });
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const handleChange = (e: any) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const registerReq = (e: any) => {
        e.preventDefault();
        setButtonDisabled(true)

        axios
          .post(
            'https://priciples-lnd.herokuapp.com/auth/register',
            credentials
          )
          .then((res: any) => {
            console.log(res);
            setButtonDisabled(false)
            props.history.push('/login');
          })
          .catch((err: Error) => {
            console.log({ err })
            alert(`Error: ${err}`)
            window.location.reload()
          });
    };

    return (
        <div className="register_container">
          <div className='header-container'>
            <h1>Create an account with LND</h1>
            <FaQuestion id="Tooltip"/>
          </div>
          <div>
            <form onSubmit={registerReq}>
            <Tooltip placement="right" isOpen={tooltipOpen} target="Tooltip" toggle={toggle}>
              <p id='tooltip-text'>Use your public lightning node credentials to register account</p>
            </Tooltip>
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
              <label>
                {' '}
                LND Host
                <input
                  type="text"
                  name="host"
                  value={credentials.host}
                  onChange={handleChange}
                />
              </label>
              <label>
                {' '}
                TLS Certification
                <input
                  id='cert-input'
                  type="text"
                  name="cert"
                  value={credentials.cert}
                  onChange={handleChange}
                />
              </label>
              <label>
                {' '}
                Macaroon
                <input
                  type="text"
                  name="macaroon"
                  value={credentials.macaroon}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button disabled={buttonDisabled} onClick={registerReq}>Submit</button>
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