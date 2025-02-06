import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FindOutfitter from './components/FindOutfitter';
import RegisterOutfitter from './components/RegisterOutfitter';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import OutfitterDashboard from './components/OutfitterDashboard';
import RegisterPage from './components/RegisterPage';
import EventCalendar from './components/EventCalendar';
import Notification from './components/Notification';
import CurrencySelector from './components/CurrencySelector';
import EditOutfitter from './components/EditOutfitter';
import UserRegistration from './components/UserRegistration';
import BookingPage from './components/BookingPage';
import PrivateRoute from './components/PrivateRoute';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [currentCurrency, setCurrentCurrency] = useState('USD');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Router>
        <CurrencySelector
          currencies={['USD', 'EUR', 'GBP']}
          currentCurrency={currentCurrency}
          onCurrencyChange={setCurrentCurrency}
        />
        <Notification message="Welcome to Tour Outfitter Finder!" />
        <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/find-outfitter" element={<FindOutfitter />} />
          <Route path="/register-outfitter" element={<RegisterOutfitter />} />
          <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/outfitter-dashboard" element={<OutfitterDashboard />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/events" element={<EventCalendar events={[]} />} />
          <Route path="/edit-outfitter/:id" element={<EditOutfitter />} />
          <Route path="/register-user" element={<UserRegistration />} />
          <Route
            path="/booking"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <BookingPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;