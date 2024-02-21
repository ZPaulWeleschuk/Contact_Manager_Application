import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { regexFirstName, regexLastName, regexEmail } from "../utils/constants";
import { ContactService } from "../services/ContactService";

const CreateContactScreen = () => {
  const [contact, setContact] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  let navigate = useNavigate();

  //generate unique id for the new contact, and check the id is not already used
  async function generateUniqueId() {
    try {
      let data = await ContactService.fetchContacts();
      let randNum = Math.floor(Math.random() * 100000000) + 1;
      let isUnique = true;
      // Loop through the JSON data and check if randNum is not contained in any of the objects
      data.forEach((obj) => {
        if (obj.id === randNum.toString()) {
          isUnique = false;
        }
      });
      // If randNum is not contained in any of the objects, return randNum
      if (isUnique) {
        return randNum.toString();
      } else {
        // If randNum is already used, call the function again to generate a new randNum
        return generateUniqueId();
      }
    } catch (error) {
      console.error("Error fetching Contacts:", error);
    }
  }

  useEffect(() => {
    let firstNameIsValid =
      contact.firstName === "" || regexFirstName.test(contact.firstName);
    let lastNameIsValid =
      contact.lastName === "" || regexLastName.test(contact.lastName);
    let emailIsValid = regexEmail.test(contact.email);
    setIsFormValid(firstNameIsValid && lastNameIsValid && emailIsValid);
  }, [contact]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    contact.id = await generateUniqueId();
    try {
      let response = await ContactService.createContact(contact);
      if (response.status === 201) {
        navigate("/home", { replace: true });
      }
    } catch (error) {
      console.error("Error creating contact:", error);
      navigate("/create", { replace: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          placeholder={"First Name (Optional) 3-25 characters"}
          value={contact.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="m-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          placeholder={"Last Name (Optional) 2-30 characters"}
          value={contact.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="m-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={contact.email}
          placeholder={"Email (Required)"}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className={!isFormValid ? "btn btn-danger m-3" : "btn btn-primary m-3"}
        disabled={!isFormValid}
      >
        Create Contact
      </button>
    </form>
  );
};

export default CreateContactScreen;
