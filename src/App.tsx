import React, {useEffect, useState} from "react"
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Principles from "./components/Principles"
import Login from "./components/Login"
import lightningLogin from "./components/lightningLogin"
import Register from './components/Register'
import Profile from "./components/Profile";
import "./index.scss"

const App = () => {

    lightningLogin()
    return(
        <div className="app">
            <Header />
            <Route exact path='/' component={Principles}/>
            <Route exact path='/login' render={(props) => <Login {...props} />} />
            <Route exact path='/register' render={(props) => <Register {...props} /> } />
            <Route exact path='/profile' component={Profile}/>
        </div>
    )
}

export default App;