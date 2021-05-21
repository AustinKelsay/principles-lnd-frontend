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

    const fetchPrinciples = () => {
        axios.get('https://priciples-lnd.herokuapp.com/principles')
        .then((res) => {
            setPrinciples(res.data)
        })
        .catch
        ((err) => {
            console.log(err)
        })
    }

    return (
        <InfiniteScroll 
            dataLength={principles.length} 
            height={'75vh'} 
            style={{width: '60%', border: '2px solid oldlace', borderRadius: '5px', margin: '0 auto'}} 
            hasMore={false}
            loader={<h4>Loading...</h4>}
            next={fetchPrinciples}
            >
            <div className="principles">
                {
                    principles.length
                    ?
                    principles.map((principle: any) => {
                        return(
                            <div key={uuidv4()}>
                                <span>Problem</span>
                                <h3>{principle.problem}</h3>
                                <span>Diagnosis</span>
                                <h4>{principle.diagnosis}</h4>
                                <span>Change</span>
                                <h4>{principle.change}</h4>
                                <div>
                                    <p>User: {principle.user}</p>
                                    <button>Lightning upvote</button>
                                    <p>Up-votes: {principle.votes}</p>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div>
                        <p>Loading...</p>
                    </div>
                }
            </div>
        </InfiniteScroll>
        )
}

export default Principles;