
import { useParams } from "react-router-dom";
import { useState } from "react";
export default function Addmember(){
    const {id}=useParams();
    const [formData, setFormData] = useState({
        name: '',
        national_id: '',
        id:id
        ,relation:''
        ,age:'',

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
            Add Family member
          
          </label> 
          <br />
          <label>
            relation:
            <input
              type="text"
              name="relation"
              value={formData.relation}
              onChange={handleChange}
            />
          </label>
          <br />
          
          <label>
            national_id:
            <input
              type="text"
              name="national_id"
              value={formData.national_id}
              onChange={handleChange}
            />
      </label>
      <label>
            name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
      </label>
      <label>
            age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
      </label>
         
          <br />      <button type="submit">Update info</button>
        </form>
      );




















}