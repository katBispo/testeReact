// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './telas/Dashboard';
import ProfilePage from './telas/ProfilePage';
import WasteRegistrationForm from './telas/telas cadastro/WasteRegistrationForm';
import ReagentRegistration from './telas/telas cadastro/ReagentRegistration';
import UserRegistration from './telas/telas cadastro/UserResgistration';
import EquipmentRegistration from './telas/telas cadastro/EquipmentRegistration';
import WasteList from './telas/listas/WasteList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/cadastroResiduo" element={<WasteRegistrationForm/>}/>
        <Route path="/cadastroReagente" element={<ReagentRegistration/>}/>
        <Route path="/cadastroUsuario" element={<UserRegistration/>}/>
        <Route path="/cadastroEquipamento" element={<EquipmentRegistration/>}/>
        <Route path="/listaResiduos" element={<WasteList/>}/>



      </Routes>
    </Router>
  );
};

export default App;
