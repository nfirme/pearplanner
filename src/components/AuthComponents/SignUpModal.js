import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import SignUpForm from './SignUpForm'

function SignUpModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button id="sign-up" style={{marginLeft: 4}} variant="primary" onClick={handleShow}>
          Sign Up
        </Button>
  
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up to PearPlanner</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignUpForm />
          </Modal.Body>
        </Modal>
      </>
    );
  }

export default SignUpModal;
