import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm'
import UserContext from '../AuthComponents/UserContext'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import './LoginModal.css'

function LoginModal(props) {

  const { user } = useContext(UserContext);
  let history = useHistory();

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleClick() {
      user ? history.push('/app') : handleShow();
    }
  
    return (
      <>
        <Button variant={props.variant} onClick={handleClick} className={props.buttonStyle}>
          {props.buttonText}
        </Button>
  
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign in to PearPlanner</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm />
          </Modal.Body>
        </Modal>
      </>
    );
  }

  LoginModal.propTypes = {
    buttonText: PropTypes.string,
    variant: PropTypes.string,
    buttonStyle: PropTypes.string
}

export default LoginModal;