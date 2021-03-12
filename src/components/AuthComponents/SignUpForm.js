import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import firebase from '../../firebase'
import { useHistory } from 'react-router-dom'

function SignUpForm() {

    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    function validateForm() {
        return (
            email.length > 0 &&
            password.length > 0 &&
            password === confirmPass
        );
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
          await firebase.auth().createUserWithEmailAndPassword(email, password);
          history.push('/app');
        } catch {
          console.log("error");
        }
    }

    return (
        <div className="Signup">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="confirmPass">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </Form.Group>
          <Button id="send-sign-up" block size="lg" type="submit" disabled={!validateForm()}>
            Sign Up
          </Button>
        </Form>
      </div>
    )    
}

export default SignUpForm;
