import React, { useState, useEffect } from 'react';

const EditContactScreen = ({ user, handleUpdate }) => {
  const [updatedUser, setUpdatedUser] = useState({ firstName: '', lastName: '', email: '' });

  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" name="firstName" value={updatedUser.firstName} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" name="lastName" value={updatedUser.lastName} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={updatedUser.email} disabled />
      </div>
      <button type="submit" className="btn btn-primary">Update User</button>
    </form>
  );
};

export default EditContactScreen;