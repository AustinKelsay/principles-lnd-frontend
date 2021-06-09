import React, {useEffect, useState} from "react"
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Principles from "./components/Principles"
import Login from "./components/Login"
import lightningLogin from "./components/lightningLogin"
import Register from './components/Register'
import "./index.scss"

const App = () => {

    lightningLogin()
    return(
        <div className="app">
            <Header />
            <Route exact path='/' component={Principles}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
        </div>
    )
}

export default App;