import React from 'react'
import {Table} from 'reactstrap'
import '../styles/ShowMatches.css'

function ShowMatches(){
    const animals = [
        {"name":"ruff","type":"dog","sex":"female","shelter_name":"shelter","adoption_url":"example.com"},
        {"name":"jerald","type":"duck","sex":"male","shelter_name":"shelter","adoption_url":"example.com"}
      ]
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
                    animals.map((pet, id) => (
                        <tr>
                        <th>{pet.name}</th>
                        <td>{pet.type}</td>
                        <td>{pet.sex}</td>
                        <td>{pet.shelter_name}</td>
                        <td>{pet.adoption_url}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </Table>
    );
}
export default ShowMatches;