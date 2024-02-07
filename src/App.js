import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/templates/Layout.js/Layout';
import "./global.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Layout}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
