import React, {useEffect, useState} from "react"
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Principles from "./components/Principles"
import Login from "./components/Login"
import "./index.scss"

const App = () => {

    return(
        <div className="app">
            <Header />
            <Route exact path='/' component={Principles}/>
            <Route path='login' component={Login} />
        </div>
    )
}

export default App;