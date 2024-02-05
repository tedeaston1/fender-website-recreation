import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/header/header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Header}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
