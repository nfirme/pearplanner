import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../../firebase'
import { UserContext } from '../AuthComponents/AuthComponents'
import PropTypes from 'prop-types'

function NewResourceForm(props) {

    const { user } = useContext(UserContext);

    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");
    const [field3, setField3] = useState("");

    function validateForm() {
        return field1.length > 0 && field2.length > 0 && field3.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (user) {
            const courseId = 0; // do something to generate custom course ID
            const userRef = firebase.database().ref('users/' + user.uid + '/courses/' + courseId);
            userRef.set({
                setting1: field1,
                setting2: field2,
                setting3: field3
            })
        }
        props.closeModal();
    }

    return (
        <div className="NewCourseForm">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="field1">
                <Form.Label>Field 1</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={field1}
                    onChange={(e) => setField1(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="field2">
                <Form.Label>Field 2</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={field2}
                    onChange={(e) => setField2(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="field3">
                <Form.Label>Field 3</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={field3}
                    onChange={(e) => setField3(e.target.value)}
                />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
            </Button>
        </Form>
        </div>
    )
}

NewResourceForm.propTypes = {
    closeModal: PropTypes.func
}

export default NewResourceForm;