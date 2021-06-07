import React from 'react'
import {Table} from 'reactstrap'
import '../styles/ShowMatches.css'

function ShowMatches(props){

      return(
        <Table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Sex</th>
                <th>Shelter Name</th>
                <th>Adoption URL</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.matches.map((pet, id) => (
                        <tr>
                        <th>{pet.name}</th>
                        <td>{pet.type}</td>
                        <td>{pet.sex}</td>
                        <td>{pet.shelter_name}</td>
                        <td><a href={pet.adoption_url} target="_blank">View Pet</a></td>
                        </tr>
                    ))
                }
                
            </tbody>
        </Table>
    );
}
export default ShowMatches;