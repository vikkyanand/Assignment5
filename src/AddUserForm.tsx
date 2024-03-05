// AddUserForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  location: string;
}

const AddUserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    location: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7097/api/Users', formData);
      console.log(response);
      // Redirect to user list page or show success message
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="ID" onChange={handleChange} />
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddUserForm;
