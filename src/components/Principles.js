import React, { useEffect, useState } from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import { v4 as uuidv4 } from 'uuid';

const Principles = () => {
    const [principles, setPrinciples] = useState([])

    useEffect(() => {
        axios.get('https://priciples-lnd.herokuapp.com/principles')
        .then((res) => {
            setPrinciples(res.data)
        })
        .catch
        ((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className="principles">
            {
                principles.length
                ?
                principles.map((principle) => {
                    return(
                        <div key={uuidv4()}>
                            <h3>{principle.problem}</h3>
                            <span>Diagnosis</span>
                            <h4>{principle.diagnosis}</h4>
                            <span>Change</span>
                            <h4>{principle.change}</h4>
                            <p>User: {principle.user}</p>
                        </div>
                    )
                })
                :
                <p>Loading...</p>
            }
        </div>
        )
}

export default Principles;