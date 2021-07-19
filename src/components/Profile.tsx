import React, {useEffect, useState} from "react"
import axios from 'axios'
import { RootState } from "../store/Reducer";
import { useSelector } from "react-redux";
import { useHistory, Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component"
import { v4 as uuidv4 } from 'uuid';
import "./components.scss"

const Profile = () => {
    const history = useHistory();
    const user = useSelector((state: RootState) => {
        return state;
      });

    const [userPrinciples, setUserPrinciples] = useState([])

    useEffect(() => {
        axios.get('https://priciples-lnd.herokuapp.com/principles')
        .then((res) => {
            console.log(res);
            setUserPrinciples(res.data.sort((a:any, b:any) => b.votes - a.votes))
        })
        .catch
        ((err) => {
            console.log(err)
        })
    },[])

    const fetchPrinciples = () => {
        axios.get('https://priciples-lnd.herokuapp.com/principles')
        .then((res) => {
            setUserPrinciples(res.data.sort((a:any, b:any) => b.votes - a.votes))
        })
        .catch
        ((err) => {
            console.log(err)
        })
    }

    return (
        <InfiniteScroll 
            dataLength={userPrinciples.length} 
            height={'75vh'} 
            style={{width: '80%', border: '4px solid oldlace', borderRadius: '5px', margin: '0 auto'}} 
            hasMore={false}
            loader={<h4>Loading...</h4>}
            next={fetchPrinciples}
        >
                <div className="profile">
                    <section>
                        <h1>Node hostname: {user.state.host}</h1>
                        <h4>Public key: {user.state.pubkey}</h4>
                        <h4>TLS Cert: {user.state.cert}</h4>
                        <h4>Admin Macaroon: {user.state.macaroon}</h4>
                    </section>
                    <h3>My principles</h3>
                    <hr></hr>
                    <nav>
                        <button>Add principle</button>
                    </nav>
                {
                    userPrinciples.map((principle: any) => {
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
                }
                </div>

        </InfiniteScroll>
    )
}

export default Profile