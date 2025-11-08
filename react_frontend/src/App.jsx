import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (formData) => {
    // Your login logic here
    console.log('Login data:', formData);
    setIsLoggedIn(true);
  };

  const handleSignup = (formData) => {
    // Your signup logic here
    console.log('Signup data:', formData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <DashboardPage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} onSignup={handleSignup} />
      )}
    </div>
  );
}

export default App;
