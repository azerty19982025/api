import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des utilisateurs :', error);
      });
  }, []);

  return (
    <div className="user-container">
      <h1>Liste des utilisateurs</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p><strong>Email :</strong> {user.email}</p>
            <p><strong>Adresse :</strong> {user.address.city}, {user.address.street}</p>
            <p><strong>Téléphone :</strong> {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
