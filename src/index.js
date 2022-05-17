import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import App from './App';
import Home from './components/Home'
import Tours from './components/Tours'
import Gallary from './components/Gallary'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Pages from './components/Pages'
import Login from './components/Login'
import Hotel from './components/Hotel'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<App/>}/>
      <Route path='/Home'element={Home}/>
      <Route path='/Tours'element={Tours}/>
      <Route path='/Gallary'element={Gallary}/>
      <Route path='/Hotel'element={Hotel}/>
      <Route path='/Blog'element={Blog}/>
      <Route path='/Pages'element={Pages}/>
      <Route path='/Contact'element={Contact}/>
      <Route path='/Login'element={Login}/>
    </Routes>
    </BrowserRouter>
);
export default ReactDOM
