import React from "react"
import { useHistory, Link } from 'react-router-dom';
import "./components.scss"

const Header = () => {
    const history = useHistory();
    return (
        <div className="header">
            <h1>Principles</h1>
            <h4>A Bitcoin Lightning enabled posting board inspired by Ray Dalio's principles format</h4>
            <div>
                <button onClick={() => history.push('/login')}>Login</button>
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Header