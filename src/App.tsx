import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import LoginForm from './components/LoginForm';
import UserDetails from './components/UserDetails';
import './App.css';

const App: React.FC = () => {
  return (
      <UserProvider>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
            </ul>
          </nav>
          <main >
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/user" element={<UserDetails />} />
            </Routes>
          </main>
        </Router>
      </UserProvider>
  );
};

export default App;