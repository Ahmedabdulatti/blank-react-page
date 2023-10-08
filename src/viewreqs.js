import dummydata from "./dummydata";


export default function Reqs(){
    return(
        
        <>   {   dummydata.map((data)=>

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
         {data.birthday}
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
        {data.affliation}
        </label>
        <br />
        <label>
           Education Background:
        {data.background}
        </label>
        <br />
      
</div>
        )

        }











    
    </>)
}