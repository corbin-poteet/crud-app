import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { CREATE_PLANET } from '../Graphql/Mutations';

function CreatePlanet() {

    const [planet, setName] = useState('');

    const [createPlanet] = useMutation(CREATE_PLANET);

    const [show, setShow] = useState(false);

    const handleClose = () => {
        if (planet !== '') {
            createPlanet({
                variables: { planet: planet },
            }).then((result) => {
                window.location.reload();
                return;
            });
        }

        setShow(false);
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create Planet
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Planet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control type="text" required onChange={(event) => { setName(event.target.value) }} value={planet} placeholder="name input" />

                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

    // return (



    //     <div className="createPlanet">
    //         <h2>Create Custom Planet</h2>
    //         <form>
    //             <label htmlFor="name">Name:</label>
    //             <input type="text" id="name" placeholder='name' required onChange={(event) => { setName(event.target.value) }} />
    //             <button onClick={() => {
    //                 createPlanet({
    //                     variables: { planet: planet },
    //                 }).then((result) => {
    //                     window.location.reload();
    //                     return;
    //                 });
    //             }}>Create Planet</button>
    //         </form>
    //     </div>
    // )
}

export default CreatePlanet