import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex gap-6 text-sm text-gray-700">
      <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
      <Link to="/dashboard" className="hover:text-blue-600 font-medium">Dashboard</Link>
      <Link to="/clients" className="hover:text-blue-600 font-medium">Clients</Link>
      <Link to="/invoices" className="hover:text-blue-600 font-medium">Invoices</Link>
    </nav>
  );
}

export default NavBar;
