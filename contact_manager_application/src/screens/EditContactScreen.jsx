import React, { useState, useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import { regexFirstName, regexLastName } from '../utils/constants';
import { ContactService } from '../services/ContactService';

const EditContactScreen = () => {
  let navigate = useNavigate();
 let {contactId} = useParams();
 const [isFormValid, setIsFormValid] = useState(false);


 const [contact, setContact] = useState({
  id: '',
  firstName: '',
  lastName: '',
  email: ''    
});


useEffect(() => {
  async function fetchContact(){
    try {
      let data = await ContactService.fetchContact(contactId);
      setContact(data);
    } catch (error) {
      console.error('Error fetching Contacts:', error);
    }
  }
  fetchContact()
}, [contactId]);


useEffect(() => {
  let firstNameIsValid =  regexFirstName.test(contact.firstName);
let lastNameIsValid = contact.lastName === '' || regexLastName.test(contact.lastName);
setIsFormValid(firstNameIsValid && lastNameIsValid);
}, [contact]);

const handleChange = (e) => {
setContact({ ...contact, [e.target.name]: e.target.value });
};

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let response  = await ContactService.updateContact(contactId, contact);
      if (response.status === 200) {
        navigate('/home', { replace: true });
      }
    } catch (error) {
      console.error('Error updating contact:', error);
      navigate(`/contacts/${contactId}`, { replace: false });
    }
  };


  return (

    <form onSubmit={handleUpdate}>
    <div className="m-3">
      <label htmlFor="firstName" className="form-label">First Name</label>
      <input type="text" className="form-control" id="firstName" name="firstName" value={contact.firstName}   onChange={handleChange} placeholder={"First Name (Optional) 3-25 characters"}    />
    </div>
    <div className="m-3">
      <label htmlFor="lastName" className="form-label">Last Name</label>
      <input type="text" className="form-control" id="lastName" name="lastName" value={contact.lastName}    onChange={handleChange} placeholder={"Last Name (Optional) 2-30 characters"}   />
    </div>
    <div className="m-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" name="email" value={contact.email} placeholder={"Email (Required)"} disabled required  />
    </div>
    <button type="Update" className={!isFormValid?"btn btn-danger m-3" :"btn btn-primary m-3"} disabled={!isFormValid}>Update Contact</button>
  </form>
  );
};

export default EditContactScreen;