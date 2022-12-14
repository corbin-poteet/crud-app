import React from 'react'
import { GET_ALL_PLANETS } from '../Graphql/Queries'
import { DELETE_PLANET } from '../Graphql/Mutations';
import { useMutation, useQuery } from '@apollo/client'
import { Table } from 'react-bootstrap';

function PlanetList() {

    const { loading, data } = useQuery(GET_ALL_PLANETS);

    const [deletePlanet] = useMutation(DELETE_PLANET);

    return (

        <>
            {loading && <p>Loading...</p>}
            {data && <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Planet</th>
                        <th>Region</th>
                        <th>Sector</th>
                        <th>System</th>
                        <th>Grid</th>
                        <th>X</th>
                        <th>Y</th>
                        <th>Canon</th>
                        <th>Legends</th>
                        <th>Custom</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.getAllPlanets.map((planet: any) => (
                        <tr key={planet.id}>
                            <td>
                                {planet.planet_link == '' ? planet.planet : <a href={planet.planet_link}>{planet.planet}</a>}
                            </td>
                            <td>
                                {planet.sector_link == '' ? planet.sector : <a href={planet.sector_link}>{planet.sector}</a>}
                            </td>
                            <td>
                                {planet.region_link == '' ? planet.region : <a href={planet.region_link}>{planet.region}</a>}
                            </td>
                            <td>
                                {planet.system_link == '' ? planet.system : <a href={planet.system_link}>{planet.system}</a>}
                            </td>
                            <td>
                                {planet.grid ? planet.grid : ''}
                            </td>
                            <td>
                                {planet.x == 0 && planet.y == 0 ? '' : `${planet.x}`}
                            </td>
                            <td>
                                {planet.x == 0 && planet.y == 0 ? '' : `${planet.y}`}
                            </td>
                            <td>
                                {planet.canon ? 'Yes' : 'No'}
                            </td>
                            <td>
                                {planet.legends ? 'Yes' : 'No'}
                            </td>
                            <td>
                                {planet.custom ? 'Yes' : 'No'}
                            </td>

                            {!planet.custom ? <td className='buttonCol'></td> : <td className='buttonCol'><button type='button' onClick={() => {
                                deletePlanet({
                                    variables: { id: planet.id },
                                }).then((result) => {
                                    if (result.data.deletePlanet.success) {
                                        //refresh page
                                        window.location.reload();
                                        return true;
                                    }
                                    alert("Error: " + result.data.deletePlanet.text);
                                }).catch((error) => {
                                    console.log(error);
                                });
                            }}>Delete</button></td>
                            }
                        </tr>
                    ))}
                </tbody>
            </Table>}

            <button type="button" id="topButton" onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Top</button>

        </>
    )
}

export default PlanetList