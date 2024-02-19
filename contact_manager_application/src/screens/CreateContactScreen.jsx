
import React, { useState, useEffect } from 'react';

const CreateContactScreen = () => {
  const [contact, setContact] = useState({ firstName: '', lastName: '', email: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  useEffect(() => {
   
    const firstNameIsValid = contact.firstName === '' || /^[a-zA-Z0-9-' ]{3,25}$/.test(contact.firstName);
    const lastNameIsValid = contact.lastName === '' || /^[a-zA-Z0-9-' ]{2,30}$/.test(contact.lastName);
    const emailIsValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contact.email);
    setIsFormValid(firstNameIsValid && lastNameIsValid && emailIsValid);
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    // Here you can handle the submission of the form, for example, send the contact data to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" name="firstName" placeholder={"First Name (Optional) 3-25 characters"}  value={contact.firstName} onChange={handleChange} pattern="^[a-zA-Z0-9-' ]{3,25}$" />
      </div>
      <div className="m-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" name="lastName" placeholder={"Last Name (Optional) 2-30 characters"} value={contact.lastName} onChange={handleChange} pattern="^[a-zA-Z0-9-' ]{2,30}$" />
      </div>
      <div className="m-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={contact.email} placeholder={"Email (Required)"} onChange={handleChange} required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
      </div>
      <button type="submit" className={!isFormValid?"btn btn-danger m-3" :"btn btn-primary m-3"} disabled={!isFormValid}>Create Contact</button>
    </form>
  );
};

export default CreateContactScreen;

