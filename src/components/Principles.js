import React, { useEffect, useState } from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import { v4 as uuidv4 } from 'uuid';

const Principles = () => {
    const [principles, setPrinciples] = useState([])

    useEffect(() => {
        axios.get('https://principles-lnd.herokuapp.com/principles')
        .then((res) => {
            setPrinciples(res.data)
            console.log(res)
        })
        .catch
        ((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className="principles">
            {
                principles.map((principle) => {
                    return(
                        <div key={uuidv4()}>
                            <p>Problem: {principle.problem}</p>
                            <p>Diagnosis: {principle.diagnosis}</p>
                            <p>Change: {principle.change}</p>
                            <p>User:</p>
                        </div>
                    )
                })
            }
        </div>
        )
}

export default Principles;