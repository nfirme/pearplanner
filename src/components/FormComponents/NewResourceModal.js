import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import NewResourceForm from './NewResourceForm'
import PropTypes from 'prop-types'
import './NewResourceModal.css'

function NewResourceModal(props) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-primary" size="lg" onClick={handleShow} className="resource-btn">
          +
        </Button>
  
        <Modal centered show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Add a new resource</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewResourceForm closeModal={handleClose} courseId={props.courseId} />
          </Modal.Body>
        </Modal>
      </>
    );
  }

NewResourceModal.propTypes = {
  courseId: PropTypes.string
}

export default NewResourceModal;