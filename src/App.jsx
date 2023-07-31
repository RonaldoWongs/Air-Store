import React, { useState, useEffect } from 'react';
import './App.css';
import TennisStore from './components/TennisStore';
import Header from './components/Header';
import Finish from './components/Finish';
import Loader from './components/Loader'; // Asegúrate de ajustar la ruta correcta

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de una carga asíncrona (puedes ajustarlo según tu lógica)
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Muestra el loader mientras loading sea true
      ) : (
        <>
          <Header />
          <TennisStore />
          <Finish />
        </>
      )}
    </>
  );
}

export default App;
