import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import { AdminPage } from './pages/AdminPage/AdminPage';
import LoginForm from './features/users/LoginForm';
import Home from './pages/Home/Home';



function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
