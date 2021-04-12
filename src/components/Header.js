import React from "react"
import "./components.scss"

const Header = () => {
    return (
        <div className="header">
            <h1>Principles</h1>
            <h4>A Bitcoin Lightning enabled posting board inspired by Ray Dalio's principles format</h4>
            <div>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Header