import { useState } from "react";
import {TableContainer,Table,TableBody,TableRow,TableCell,Paper,TableHead} from "@mui/material";

function Viewpatients() {
  const Patients = [
    {
      id: 1,
      Name: "Omar",
      email: "omar@gmail.com",
      disease: "Flu",
      dateofbirth: "1/1/2002",
      gender: "Male",
    },
    {
      id: 2,
      Name: "Yehia",
      email: "yeho@gmail.com",
      disease: "Cold",
      dateofbirth: "12/12/2002",
      gender: "Male",
    },
    {
      id: 3,
      Name: "Malak",
      email: "malak@gmail.com",
      disease: "Diabetes",
      dateofbirth: "17/10/2002",
      gender: "Female",
    },
  ];

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patients, setPatients] = useState(Patients);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = (id) => {
    setSelectedPatient(id);
  };

  const handleSearch = () => {
    const filteredPatients = Patients.filter((patient) =>
      patient.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPatients(filteredPatients);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mt-2">
        <h4>Patients:</h4>
        <div>
          <input
            type="text"
            placeholder="Search by Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearch}>Search</button>
          <TableContainer component={Paper}>
            <Table aria-label="List of Patients">
              <TableHead>
                <TableRow>
                  <TableCell>Patient Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Disease</TableCell>
                  <TableCell>Date Of Birth</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.Name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.disease}</TableCell>
                    <TableCell>{row.dateofbirth}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>
                      <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                          selectedPatient === row.id ? "bg-success" : ""
                        }`}
                        onClick={() => handleSelect(row.id)}
                      >
                        {selectedPatient === row.id ? "Patient Selected" : "Select Patient"}
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

export default Viewpatients;
