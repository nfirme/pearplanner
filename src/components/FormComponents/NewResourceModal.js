import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import NewResourceForm from './NewResourceForm'

function NewResourceModal() {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button style={{float: "right"}} onClick={handleShow}>
          Add resource
        </Button>
  
        <Modal centered show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Add a new resource</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewResourceForm closeModal={handleClose}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }

export default NewResourceModal;