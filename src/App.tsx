import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import UpdateAddress from './pages/UpdateAddress';
import UpdateBank from './pages/Update-Bank';
import Otp from './pages/Otp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Signin />} />
        <Route path='/update-address' element={<UpdateAddress />} />
        <Route path='/update-bank' element={<UpdateBank />} />
        <Route path='/otp' element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
