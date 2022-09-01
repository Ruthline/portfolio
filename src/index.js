import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import './index.css';
import Home from './pages/aboutMe/Home';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Studies from './pages/studies/Studies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/portfolio' element={<Home/>}></Route>
    <Route path='/home' element={<Navigate replace to={"/portfolio"}/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='/studies' element={<Studies/>}></Route>
  </Routes>
  </BrowserRouter>
);
