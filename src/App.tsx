import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import UpdateAddress from './pages/UpdateAddress';
import UpdateBank from './pages/Update-Bank';
import UpdateProfile from './pages/Update-Profile';
import Otp from './pages/Otp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Withdraw from './pages/Withdraw';
import ExchangePlastic from './pages/Exchange-Plastic';
import ViewProfile from './pages/ViewProfile';
import EditExchangePlastic from './pages/Edit-Exchange';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Signin />} />
        <Route path='/update-address' element={<UpdateAddress />} />
        <Route path='/update-bank' element={<UpdateBank />} />
        <Route path='/update-profile' element={<UpdateProfile />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/exchange' element={<ExchangePlastic />} />
        <Route path='/withdraw' element={<Withdraw />} />
        <Route path='/view-profile/:id' element={<ViewProfile />} />
        <Route path='/edit-exchnage/:id' element={<EditExchangePlastic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
