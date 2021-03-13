import React from 'react'
import './Footer.css'
import firebase from '../firebase'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Footer() {

    let history = useHistory();

    return (
        <div className="footer">
            <Button id="sign-out" data-testid="button" style={{backgroundColor: "transparent", color: "green", borderRadius: 10, float: "right", marginRight: 10}} variant="success" onClick={() => {
                firebase.auth().signOut();
                history.push('/');
            }}>Sign-out</Button>
        </div>
    )
}

export default Footer;
