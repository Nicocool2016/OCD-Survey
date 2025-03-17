import React, { useState } from 'react';
import './App.css';
import AdminPage from './AdminPage';
import UserPage from './UserPage';
import MailPage from './MailPage'; 
import SurveyCreator from './SurveyCreator'; 
import SurveyPage from './SurveyPage';


function App() {
  const [role, setRole] = useState(null); 
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setError('Please enter a valid email address containing "@"');
      return;
    }
    if (password.trim() === '') {
      setError('Password cannot be empty.');
      return;
    }

    if (email === 'admin@example.com' && password === 'admin123') {
      setRole('admin');
    } else if (email === 'user@example.com' && password === 'user123') {
      setRole('user');
    } else {
      setError('Invalid email or password.');
      return;
    }

    setError('');
  };

  if (role === 'admin') return <AdminPage setRole={setRole} />;
  if (role === 'user') return <UserPage setRole={setRole} />;
  if (role === 'mail') return <MailPage setRole={setRole} />;
  if (role === 'surveyCreator') return <SurveyCreator setRole={setRole} />;
  const urlParams = new URLSearchParams(window.location.search);
  if (window.location.pathname.includes('/survey')) {
    return <SurveyPage />;
  }

  if (window.location.pathname.includes('/survey')) {
    return <SurveyPage />;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
