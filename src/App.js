import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import ProviderLogin from './components/ProviderLogin';
import AccountVerification from './components/AccountVerification';
import MemberScreen from './components/MemberScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProviderLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<AccountVerification />} />
        <Route path="/members" element={<MemberScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
