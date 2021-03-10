import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
// import { useAuth } from './AuthComponents/AuthContext'
// import firebase from '../firebase'
import './SettingsForm.css'

function SettingsForm() {

    const [field, setField] = useState("");
    const [success, setSuccess] = useState(false);

    function validateForm() {
        return field.length > 0;
    }

  async function handleSubmit(event) {
    event.preventDefault();
    setSuccess(true);
  }

  return (
    <div className="SettingsFormComponent">
      {success && 
      <Alert variant="success" className="success-alert">Successfully updated Canvas token!</Alert>}
      <Form onSubmit={handleSubmit} className="SettingsForm">
        <Form.Group size="lg" controlId="field">
          <Form.Label>New Canvas Token</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SettingsForm;