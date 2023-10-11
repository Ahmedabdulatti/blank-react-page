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
import Patientapps from './patientapps';
import Remove from './remove';
import Family from './viewfamily';
import Aptpateint from './js/viewapt';
import Pres from './viewpres';
function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/reg" element={<Choose/>} />
        <Route  path="reg/pateint" element={<Pateintreg/>} />
        <Route path="reg/doctor" element={<Doctorreg/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="admin/AddAdmin" element={<AddAdminstrator/>} />
        
        <Route path="admin/remove" element={<Remove/>} />
         <Route path="/admin/reqs" element={<Reqs/>} />
         <Route path="doctor/:id" element={<Doctor/>} />
         <Route path="patient/:id" element={<Patient/>}/>
         <Route path="patient/:id/addmember" element={<Addmember/>}/>
         <Route path="/Patientapps" element={<Patientapps/>}/>
         
         <Route path="patient/:id/family" element={<Family/>}/>
         <Route path="patient/:id/addmember" element={<Addmember/>}/>
            <Route path="patient/:id/apt" element={<Aptpateint/>}/>
            <Route path="patient/:id/pres" element={<Pres/>}/>
      
      </Routes>
    </Router>
  );
  
}

export default App;

