import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CreatePlanet from './CreatePlanet';
import PlanetList from './PlanetList';
import UpdatePlanet from './UpdatePlanet';
import SystemList from './SystemList';

function Systems() {

  return (
    <>
      <SystemList />
    </>
  );
}

export default Systems;
