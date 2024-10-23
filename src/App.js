import { useState, useEffect } from "react";
import { BrowserRouter,Route,Router,Routes, Navigate } from 'react-router-dom';
import './App.css';
import Quit from "./screens/Quit";
import Home from "./screens/Home";
import Recruitment from "./screens/Recruitment";
import Training from "./screens/Training";

export default function App() {

  return (
    <div className="App-main">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/Recruitment' element={<Recruitment />}/>
          <Route path='/Training' element={<Training />}/>
          <Route path="/Quit" element={<Quit />}/>
          <Route path='*' element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};