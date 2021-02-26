import React from 'react'
import './Footer.css'
import firebase from '../firebase'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Footer() {

    let history = useHistory();

    return (
        <div className="footer">
            <Button variant="success" onClick={() => {
                firebase.auth().signOut();
                history.push('/');
            }}>Sign-out</Button>
        </div>
    )
}

export default Footer;