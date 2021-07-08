import React from "react"
import { RootState } from "../store/Reducer";
import { useSelector } from "react-redux";
import { useHistory, Link } from 'react-router-dom';
import "./components.scss"

const Profile = () => {
    const history = useHistory();
    const user = useSelector((state: RootState) => {
        return state;
      });

    return (
        <div className="profile">
            <div>
                <h1>Node hostname: {user.state.host}</h1>
                <h4>Public key: {user.state.pubkey}</h4>
                <h4>TLS Cert: {user.state.cert}</h4>
                <h4>Admin Macaroon: {user.state.macaroon}</h4>
            </div>
        </div>
    )
}

export default Profile