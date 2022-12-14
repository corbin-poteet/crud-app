import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CreatePlanet from './CreatePlanet';
import PlanetList from './PlanetList';
import UpdatePlanet from './UpdatePlanet';
import { Alert, ButtonGroup, ButtonToolbar, Col, Container, Row, Stack } from 'react-bootstrap';

function Planets() {


  return (
    <div className="App">
      <Alert variant='info'>
        New planets are added to the {' '}
        <Alert.Link href="#" onClick={() => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); return false; }}>bottom</Alert.Link> of the list!
      </Alert>

      <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
  
        <CreatePlanet />
        
      </ButtonGroup>

      <ButtonGroup className="me-2" aria-label="Second group">
   
        <UpdatePlanet />

      </ButtonGroup>
      </ButtonToolbar>
       

    <br />


      <PlanetList />





    </div >
  );
}

export default Planets;
