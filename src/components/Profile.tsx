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
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const user = useSelector((state: RootState) => {
        return state;
      });
    const [userPrinciples, setUserPrinciples] = useState([])
    const [addPrinciple, setAddPrinciple] = useState(false)
    const [principle, setPrinciple] = useState({
        user_id: user.state.id,
        user: user.state.host,
        problem: "", 
        diagnosis: "",
        change: ""
    });

    useEffect(() => {
        axios.get('https://priciples-lnd.herokuapp.com/principles')
        .then((res) => {
            const principles = res.data.filter((principle:any) => {
                return principle.user_id === user.state.id
            })
            setUserPrinciples(principles.sort((a:any, b:any) => b.votes - a.votes))
        })
        .catch
        ((err) => {
            console.log(err)
        })
    },[])

    const fetchPrinciples = () => {
        axios.get('https://priciples-lnd.herokuapp.com/principles')
        .then((res) => {
            const principles = res.data.filter((principle:any) => {
                return principle.user_id === user.state.id
            })
            setUserPrinciples(principles.sort((a:any, b:any) => b.votes - a.votes))
        })
        .catch
        ((err) => {
            console.log(err)
        })
    }

    const handleChange = (e: any) => {
        setPrinciple({ ...principle, [e.target.name]: e.target.value });
    };

    const registerReq = (e: any) => {
        e.preventDefault();
        setButtonDisabled(true)

        axios
          .post(
            'https://priciples-lnd.herokuapp.com/principles',
            principle
          )
          .then((res: any) => {
            console.log(res);
            setButtonDisabled(false)
            history.push('/profile');
          })
          .catch((err: Error) => {
            console.log({ err })
            alert(`Error: ${err}`)
            window.location.reload()
          });
    };

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
                        <button onClick={() => setAddPrinciple(!addPrinciple)}>Add principle</button>
                    </nav>
                {
                    addPrinciple 
                    ?
                    <form onSubmit={registerReq}>
                      <label>
                        {' '}
                        Problem
                        <input
                          type="text"
                          name="problem"
                          value={principle.problem}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        Diagnosis
                        <input
                          type="text"
                          name="diagnosis"
                          value={principle.diagnosis}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        {' '}
                        Change
                        <input
                          type="text"
                          name="change"
                          value={principle.change}
                          onChange={handleChange}
                        />
                      </label>
                      <br />
                      <button disabled={buttonDisabled} onClick={registerReq}>Submit</button>
                    </form>
                    :
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