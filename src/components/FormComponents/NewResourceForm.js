import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../../firebase'
import { useAuth } from '../AuthComponents/AuthContext'
import PropTypes from 'prop-types'

function NewResourceForm(props) {

    const { user } = useAuth();

    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    function validateForm() {
        return name.length > 0 && link.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (user) {
            const courseId = props.courseId;
            const listRef = firebase.database().ref('users/' + user.uid + '/courses/' + courseId + '/resources');
            const newRef = listRef.push();
            newRef.set({
                name: name,
                link: link
            })

        }
        props.closeModal();
    }

    return (
        <div className="NewCourseForm">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="field1">
                <Form.Label>Resource name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="field2">
                <Form.Label>Link to resource</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </Form.Group>
            <Button id="submit-new-resource" block size="lg" type="submit" disabled={!validateForm()}>
            Submit
            </Button>
        </Form>
        </div>
    )
}

NewResourceForm.propTypes = {
    closeModal: PropTypes.func,
    courseId: PropTypes.string
}

export default NewResourceForm;
