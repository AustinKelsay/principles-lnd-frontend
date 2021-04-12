import React, {useEffect, useState} from "react"
import Header from "./components/Header";
import Principles from "./components/Principles"
import "./index.scss"

const App = () => {

    return(
        <div className="app">
            <Header />
            <Principles />
        </div>
    )
}

export default App;