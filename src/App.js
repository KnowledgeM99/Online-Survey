import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import Main from './Components/Main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token); 
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Main onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
