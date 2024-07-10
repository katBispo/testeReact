// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './telas/Dashboard';
import ProfilePage from './telas/ProfilePage';
import WasteRegistrationForm from './telas/telas cadastro/WasteRegistrationForm';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/cadastroResiduo" element={<WasteRegistrationForm/>}/>
      </Routes>
    </Router>
  );
};

export default App;
