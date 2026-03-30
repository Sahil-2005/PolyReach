import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { AuthLayout } from './components/layout/AuthLayout';
import { Dashboard } from './pages/Dashboard';
import { Contacts } from './pages/Contacts';
import { Templates } from './pages/Templates';
import { Campaigns } from './pages/Campaigns';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='templates' element={<Templates />} />
          <Route path='campaigns' element={<Campaigns />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

