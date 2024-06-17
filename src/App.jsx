import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import Dashboard from './pages/Dashboard';

import Profile from './pages/Profile';
import Transactions from './pages/Transactions';
import Leaderboard from './pages/Leaderboard';
import BuyPage from './pages/BuyPage';
import { MetaMaskProvider } from './context/MetaMaskContext.jsx';

function App() {
  return (
    <MetaMaskProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path="/buy" element={<BuyPage />} />
      </Routes>
    </Router>
    </MetaMaskProvider>
  );
}

export default App;
