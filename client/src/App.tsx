import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CreatePlanet from './components/CreatePlanet';
import './App.css';
import PlanetList from './components/PlanetList';
import UpdatePlanet from './components/UpdatePlanet';
import { Link } from "react-router-dom";
import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Planets from './components/Planets';
import Home from './components/Home';
import Systems from './components/Systems';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import DeathStar from './Sensibleworld-Starwars-Death-Star.svg';

function App() {

  return (
    <div>
      <Router basename=''>
        <Navbar bg='dark' expand='lg' variant="dark" sticky='top'>
          <Container>
          <Navbar.Brand href="/">
          <img
              alt=""
              src={DeathStar}
              width="25"
              height="25"
              className="d-inline-block align-middle me-1"
            />{' '}
            Star Wars Galaxy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/planets">
                <Nav.Link>Planets</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/systems">
                <Nav.Link>Systems</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>

        <br />


        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/systems" element={<Systems />} />
          </Routes>
        </Container>
      </Router>
    </div>

  );
}

export default App;
