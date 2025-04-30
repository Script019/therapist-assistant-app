import { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ClientList from './pages/ClientList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    if (activePage === 'dashboard') {
      return <Dashboard />;
    } else if (activePage === 'clients') {
      return <ClientList />;
    }
    return null;
  };

  return (
    <>
      <Header />
      {isLoggedIn ? (
        <>
          <NavBar onNavigate={setActivePage} />
          {renderPage()}
        </>
      ) : (
        <Login
          onLogin={() => {
            console.log('Logging in...');
            setIsLoggedIn(true);
          }}
        />
      )}
    </>
  );
}

export default App;
