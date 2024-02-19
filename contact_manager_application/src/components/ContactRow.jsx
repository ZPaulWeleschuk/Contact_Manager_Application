import React from 'react';

const ContactRow = ({ user }) => {
    const handleEdit = (user) => {
        console.log('Edit', user);
      };
    
      const handleDelete = (user) => {
        console.log('Delete', user);
      };
    return (
        <React.Fragment>
  <tr>
    <td className="align-middle">{user.lastName}</td>
    <td className="align-middle">{user.firstName}</td>
    <td className="align-middle">{user.email}</td>
    <td className="align-middle">
      <button className="btn btn-secondary m-1" onClick={() => handleEdit(user)}>Edit</button>
      <button className="btn btn-danger m-1" onClick={() => handleDelete(user)}>Delete</button>
    </td>
  </tr>
  </React.Fragment>
    );
    }


export default ContactRow;