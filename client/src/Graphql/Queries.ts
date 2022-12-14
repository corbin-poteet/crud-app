import { gql } from '@apollo/client';

export const GET_ALL_PLANETS = gql`
    query getAllPlanets {
        getAllPlanets {
            id
            planet
            planet_link
            region
            region_link
            sector
            sector_link
            system
            system_link
            grid
            x
            y
            z
            canon
            legends
            zm
            name0
            name1
            name2
            lat
            long
            ref
            status
            cregion
            cregion_link
            custom
        }
    }
`;

export const GET_ALL_SYSTEMS = gql`
    query getAllSystems {
        getAllSystems {
            id
            system
            system_link
            custom
        }
    }
`;

export const GET_PLANET = gql`
    query getPlanet($id: ID!) {
        getPlanet(id: $id) {
            id
            planet
            planet_link
            region
            region_link
            sector
            sector_link
            system
            system_link
            grid
            x
            y
            z
            canon
            legends
            zm
            name0
            name1
            name2
            lat
            long
            ref
            status
            cregion
            cregion_link
            custom
        }
    }
`;

export const GET_PLANET_BY_NAME = gql`
    query getPlanetByName($planet: String!) {
        getPlanetByName(planet: $planet) {
            id
            planet
            planet_link
            region
            region_link
            sector
            sector_link
            system
            system_link
            grid
            x
            y
            z
            canon
            legends
            zm
            name0
            name1
            name2
            lat
            long
            ref
            status
            cregion
            cregion_link
            custom
        }
    }
`;