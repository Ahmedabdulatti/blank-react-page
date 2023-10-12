import dummydata from "./dummydata";
import axios from "axios";
import { useState,useEffect } from "react";
export default function Reqs(){

  
const [apt,setapt]=useState([])
useEffect(()=>{
    async function get(){
setapt((await axios.get(`http://localhost:5000/viewdoctors`)).data)
console.log(apt)
    }
    get()
},[])
    return(

      
        
        <>   {  apt.map((data)=>

  <div>
        <br />
        <label>
          Username:
         {data.username}
        </label>
        <br />
        <label>
          Email:
         {data.email}
        </label>
        <br />
        <label>
          Birthday:
         {data.date}
        </label>
        <br />
        <label>
          Name:
          {data.name}
        </label>
        <label>
        <br />
          Hourly rate:
       {data.rate}
          
        </label>
        <br />
        <label>
          Affiliation:
        {data.affialiation}
        </label>
        <br />
        <label>
           Education Background:
        {data.education}
        </label>
        <br />
      
</div>
        )

        }











    
    </>)
}