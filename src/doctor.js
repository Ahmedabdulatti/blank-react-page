
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Doctor(){
    const {id}=useParams();
    const [formData, setFormData] = useState({
        affiliation: '',
        rate: '',
        username:id
        ,email:''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        axios.put("http://localhost:5000/docedit",formData)
        console.log('Form submitted:', formData);
        // You can add further logic to handle form submission (e.g., API call).
      };
    
      return (
        <>
        <form onSubmit={handleSubmit}>
    
    
    
    <label>
            Edit doctor info
          
          </label> 
          <br />
          <label>
            email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          
          <label>
            hourlyrate:
            <input
              type="text"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
            />
      </label>
      <label>
            affiliation:
            <input
              type="text"
              name="affiliation"
              value={formData.affiliation}
              onChange={handleChange}
            />
      </label>
         
          <br />      <button type="submit">Update info</button>

        </form>
         <button type="">View patients</button>
         </>
      );




















}