import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_PLANET } from '../Graphql/Mutations';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

function UpdatePlanet() {

  const [planet, setName] = useState('');
  const [x, setX] = useState(0.0);
  const [y, setY] = useState(0.0);

  const [result, setResult] = useState('');

  const [updatePlanet] = useMutation(UPDATE_PLANET);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    updatePlanet({
      variables: { planet: planet, x: x, y: y },
    }).then((result) => {
      if (result.data.updatePlanet.success) {

        //refresh page
        window.location.reload();
        return;
      }
      alert("Error: " + result.data.updatePlanet.text);
    }).catch((error) => {
      console.log(error);
    });

    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Planet
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Planet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Planet Name: </Form.Label>
              <Form.Control type="text" required onChange={(event) => { setName(event.target.value) }} value={planet} placeholder="name input" />
            </Form.Group>


            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>X: </Form.Label>
                <Form.Control type="number" step="0.001" required onChange={(event) => { setX(parseFloat(event.target.value)) }} value={x} placeholder="x input" />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Y: </Form.Label>
                <Form.Control type="number" step="0.001" required onChange={(event) => { setY(parseFloat(event.target.value)) }} value={y} placeholder="y input" />
              </Form.Group>

            </Row>

          </Form>




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
  //   <div className='Update Planet'>
  //     <h2>Set Planet Coordinates</h2>
  //     <form>
  //       <label htmlFor="name">Name:</label>
  //       <input type="text" id="name" placeholder='name' required onChange={(event) => { setName(event.target.value) }} />
  //       <label htmlFor="x">X:</label>
  //       <input type="number" step="0.001" id="x" placeholder='0.0' required onChange={(event) => { setX(parseFloat(event.target.value)) }} />
  //       <label htmlFor="y">Y:</label>
  //       <input type="number" step="0.001" id="y" placeholder='0.0' required onChange={(event) => { setY(parseFloat(event.target.value)) }} />
  //       <button type='button' onClick={() => {
  //         updatePlanet({
  //           variables: { planet: planet, x: x, y: y },
  //         }).then((result) => {
  //           if (result.data.updatePlanet.success) {

  //             //refresh page
  //             window.location.reload();
  //             return;
  //           }
  //           alert("Error: " + result.data.updatePlanet.text);
  //         }).catch((error) => {
  //           console.log(error);
  //         });
  //       }}>Update Planet</button>
  //     </form>
  //   </div>
  // )
}

export default UpdatePlanet