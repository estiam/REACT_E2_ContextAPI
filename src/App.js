import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContextProvider from './Components/Providers/CounterContextProvider';

const App = () => {

  return (
    <div>
      <CounterContextProvider>
        <Counter /> {/* => L'affichage du compteur */}
        <Incrementer /> {/* => L'ajout de +1  */}
        <Decrementer /> {/* => Le retrait de 1  */}
      </CounterContextProvider>
    </div>
  );
}

export default App;
