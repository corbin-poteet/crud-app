import React from 'react'
import { GET_ALL_SYSTEMS } from '../Graphql/Queries'
import { DELETE_PLANET } from '../Graphql/Mutations';
import { useMutation, useQuery } from '@apollo/client'
import { Table } from 'react-bootstrap';

function PlanetList() {

    const { loading, data } = useQuery(GET_ALL_SYSTEMS);


    return (
        <div className="systemList">
            
            {loading && <p>Loading...</p>}
            {data && <Table id="systemsTable" striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>System</th>
                        <th>Custom</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.getAllSystems.map((system: any) => (
                        <tr key={system.id}>
                            <td>
                                {system.system_link == '' ? system.system : <a href={system.system_link}>{system.system}</a>}
                            </td>
                            <td>
                                {system.custom ? 'Yes' : 'No'}
                            </td>

                            
                        </tr>
                    ))}
                </tbody>
            </Table>}

        </div>
    )
}

export default PlanetList