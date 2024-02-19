import React from 'react';
import {Link} from 'react-router-dom';
import ContactRow from '../components/ContactRow';

const HomeScreen = () => {
//TODO:temp to build front end
//need to connect to backend
  const users = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },

  ];



  return (
<React.Fragment>

<Link to="/create" className="btn btn-primary mb-3 p-3 m-3 fw-bold">Create New Contact</Link>
      <table className="table table-striped">
        <thead>
          <tr>
          <th className="fw-bold fs-5">Last Name</th>
<th className="fw-bold fs-5">First Name</th>
<th className="fw-bold fs-5">Email</th>
<th className="fw-bold fs-5">Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
  <ContactRow key={index} user={user} />
))}
        </tbody>
      </table>

      </React.Fragment>

  );
};

export default HomeScreen;

