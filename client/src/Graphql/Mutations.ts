import { gql } from '@apollo/client';

export const CREATE_PLANET = gql`
    mutation createPlanet($planet: String!) {
        createPlanet(planet: $planet) {
            id
            planet
        }
    }
`;

export const UPDATE_PLANET = gql`
    mutation updatePlanet($planet: String!, $x: Float!, $y: Float!) {
        updatePlanet(planet: $planet, x: $x, y: $y) {
            success
            text
        }
    }
`;

export const DELETE_PLANET = gql`
    mutation deletePlanet($id: ID!) {
        deletePlanet(id: $id) {
            success
            text
        }
    }
`;