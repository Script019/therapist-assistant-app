import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ClientList from './pages/ClientList';
import ClientProfile from './pages/ClientProfile';
import Invoices from './pages/Invoices';
import NotFound from './pages/NotFound';
import CalendarView from './components/CalendarView';
import AppointmentForm from './components/AppointmentForm';
import Reports from './pages/Reports'; // ✅ NEW

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header />
      {isLoggedIn ? (
        <>
          <NavBar />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clients" element={<ClientList />} />
              <Route path="/clients/:id" element={<ClientProfile />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/appointments" element={<AppointmentForm />} />
              <Route path="/reports" element={<Reports />} /> {/* ✅ NEW */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </Router>
  );
}

export default App;
