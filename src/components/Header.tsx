import React from "react"
import { RootState } from "../store/Reducer";
import { useSelector } from "react-redux";
import { useHistory, Link } from 'react-router-dom';
import "./components.scss"

const Header = () => {
    const history = useHistory();
    const user = useSelector((state: RootState) => {
        return state;
      });
    console.log(user)

    return (
        // Check if user obj is empty
        user.id == 0
        ?
        <div className="header">
            <h1>Principles</h1>
            <h4>A Bitcoin Lightning enabled posting board inspired by Ray Dalio's principles format</h4>
            <div>
                <button onClick={() => history.push('/login')}>Login</button>
                <button onClick={() => history.push('/register')}>Sign up</button>
            </div>
        </div>
        :
        <div className="header">
            <h1>Principles</h1>
            <div>
                <button className='btn-logged-in' onClick={() => history.push('/')}>Home</button>
                <ul>
                    <h5>Node hostname: {user.state.host}</h5>
                </ul>
                <button className='btn-logged-in' onClick={() => history.push('/profile')}>Profile</button>
            </div>
        </div>
    )
}

export default Header