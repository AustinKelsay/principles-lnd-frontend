import React, { useEffect, useState } from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"

const Principles = () => {
    const [principles, setPrinciples] = useState([])

    useEffect(() => {
        axios.get('https://principles-lnd.herokuapp.com/principles')
        .then((res) => {
            console.log(res)
        })
        .catch
        ((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className="principles">
                <div>
                    <p>Problem:</p>
                    <p>Diagnosis:</p>
                    <p>Change:</p>
                    <p>User:</p>
                </div>
            </div>
            )
}

export default Principles;