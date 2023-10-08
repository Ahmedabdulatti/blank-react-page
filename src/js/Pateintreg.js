import React, { useState } from 'react';

const Pateintreg = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add further logic to handle form submission (e.g., API call).
  };

  return (
    <form onSubmit={handleSubmit}>

        <label>
        PATIENT REGISTERARTION
      
      </label> 
      <br />
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Birthday:
        <input
          type="date"
          name="birthday"
          value={formData.Birthday}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <input
          type="text"
          name="text"
          value={formData.Gender}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Mobile number:
        <input
          type="Mobile number"
          name="Mobile number"
          value={formData.Mobilenumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />      <button type="submit">Register</button>
    </form>
  );
};

export default Pateintreg;