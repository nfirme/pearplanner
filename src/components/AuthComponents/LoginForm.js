import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../../firebase'
import { useHistory } from 'react-router-dom'

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    // On successful user log in, Auth observer is triggered
    // user state will be updated in AuthListener and 
    // then use router history to redirect.
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        history.push('/app');
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  }

  return (
    <div className="Login">
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
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;