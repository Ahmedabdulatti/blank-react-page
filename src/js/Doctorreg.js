import React, { useState } from 'react';

const Doctorreg = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name:'',
    dateofbirth:'',
    affiliation:'',
    hourlyrate:'',
    edu:''
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
        DOCTOR REGISTERARTION
      
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
          name="dateofbirth"
          value={formData.Birthday}
          onChange={handleChange}
        />
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
      <label>
      <br />
        Hourly rate:
        <input
          type="number"
          name="hourlyrate"
          value={formData.hourlyrate}
          onChange={handleChange}
        />
        
      </label>
      <br />
      <label>
        Affiliation:
        <input
          type="text"
          name="affiliation"
          value={formData.affiliation}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
         Education Background:
        <input
          type="text"
          name="edu"
          value={formData.edu}
          onChange={handleChange}
        />
      </label>
      <br />
    
    
      <br />
    
     
      <br />      <button type="submit">Register</button>
    </form>
  );
};

export default Doctorreg;