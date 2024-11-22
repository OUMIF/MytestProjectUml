// src/App.js
import React from 'react';
import './components/RegistrationPage.css'; 
import './App.css';
import RegistrationPage from './components/RegistrationPage'; // Importation du composant

function App() {
  return (
    <div className="App">
      <RegistrationPage /> {/* Utilisation du composant RegistrationPage */}
    </div>
  );
}

export default App;
