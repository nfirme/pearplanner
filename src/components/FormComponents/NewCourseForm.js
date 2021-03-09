import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../../firebase'
import { useAuth } from '../AuthComponents/AuthContext'
import PropTypes from 'prop-types'

function NewCourseForm(props) {

    const { user } = useAuth();

    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");
    const [field3, setField3] = useState("");

    function validateForm() {
        return field1.length > 0 && field2.length > 0 && field3.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (user) {
            const listRef = firebase.database().ref('users/' + user.uid + '/courses');
            const newRef = listRef.push();
            const key = newRef.key;
            newRef.set({
                courseTitle: field1,
                courseName: field2,
                instructor: field3,
                color: "teal",
                custom: true,
                id: key
            })
        }
        props.closeModal();
    }

    return (
        <div className="NewCourseForm">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="field1">
                <Form.Label>Course code</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={field1}
                    onChange={(e) => setField1(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="field2">
                <Form.Label>Course name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={field2}
                    onChange={(e) => setField2(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="field3">
                <Form.Label>Instructor</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={field3}
                    onChange={(e) => setField3(e.target.value)}
                />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
            Submit
            </Button>
        </Form>
        </div>
    )
}

NewCourseForm.propTypes = {
    closeModal: PropTypes.func
}

export default NewCourseForm;