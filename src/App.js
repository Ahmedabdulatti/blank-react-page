import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Pateintreg from './js/Pateintreg';
import Doctorreg from './js/Doctorreg';
import Choose from './js/userreg';
import Admin from './adminstrator';
import AddAdminstrator from './AddAdminstrator';
import Reqs from './viewreqs';
import Doctor from './doctor';
import Patient from './patient';
import Addmember from './addmember';
function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/reg" element={<Choose/>} />
        <Route  path="reg/pateint" element={<Pateintreg/>} />
        <Route path="reg/doctor" element={<Doctorreg/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="AddAdmin" element={<AddAdminstrator/>} />
         <Route path="/admin/reqs" element={<Reqs/>} />
         <Route path="doctor/:id" element={<Doctor/>} />
         <Route path="patient/:id" element={<Patient/>}/>
         <Route path="patient/:id/addmember" element={<Addmember/>}
          />
      </Routes>
    </Router>
  );
  
}

export default App;

