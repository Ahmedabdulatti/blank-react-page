import { useParams } from "react-router-dom";
import { useState, React } from "react";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";

function PatientApps() {

   /* const {id}=useParams();
    const [formData, setFormData] = useState({
        id:id,
        name: '',
        doctor:'',
        date:''

      }); */


    //Dummy data 
  const appointments = [
    {
      id: 1,
      Name: "Sebaei",
      date: "1/1/2024",
    },
    {
      id: 2,
      Name: "3atti",
      date: "20/1/2024",
    },
    {
      id: 3,
      Name: "Omar",
      date: "24/12/2023",
    },
  ];


  const handleViewapp = (row) => {
    alert(JSON.stringify(row));
   };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mt-2">
        <h4>Upcoming appointments</h4>
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="List of Appointments">
              <TableHead>
                <TableRow>
                  <TableCell>Appointment Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.Name}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                  <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleViewapp(row)}>
                    View App. Details
                    
                  </button>
                </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default PatientApps;
