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
            <h1>Node hostname: {user.host}</h1>
            <h4>Public key: {user.pubkey}</h4>
            <h4>TLS Cert: {user.cert}</h4>
            <h4>Admin Macaroon: {user.macaroon}</h4>
        </div>
    )
}

export default Profile