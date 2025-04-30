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
import NotFound from './pages/NotFound'; // ✅ New import

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
              <Route path="*" element={<NotFound />} /> {/* ✅ Catch-all route */}
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
