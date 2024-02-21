import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../services/ContactService";

const HomeScreen = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        let data = await ContactService.fetchContacts();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching Contacts:", error);
      }
    }
    fetchContacts();
  }, []);

  let handleDelete = async (contactId) => {
    try {
      let response = await ContactService.deleteContact(contactId);
      if (response.status === 200) {
        let data = await ContactService.fetchContacts();
        setContacts(data);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <React.Fragment>
      <Link to="/create" className="btn btn-primary mb-3 p-3 m-3 fw-bold">
        Create New Contact
      </Link>
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
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="align-middle">{contact.lastName}</td>
              <td className="align-middle">{contact.firstName}</td>
              <td className="align-middle">{contact.email}</td>
              <td className="align-middle">
                <Link
                  to={`/edit/${contact.id}`}
                  className="btn btn-secondary m-1"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default HomeScreen;
