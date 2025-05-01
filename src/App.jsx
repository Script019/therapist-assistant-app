import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Layout from './components/Layout';

import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ClientList from './pages/ClientList';
import ClientProfile from './pages/ClientProfile';
import Invoices from './pages/Invoices';
import CalendarView from './components/CalendarView';
import AppointmentForm from './components/AppointmentForm';
import Reports from './pages/Reports';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // must start at false

  return (
    <Router basename="/therapist-assistant-app">
      {isLoggedIn ? (
        <>
          <Header />
          <NavBar />
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clients" element={<ClientList />} />
              <Route path="/clients/:id" element={<ClientProfile />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/appointments/new" element={<AppointmentForm />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </Layout>
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
