import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex flex-wrap gap-6 text-sm text-gray-700 justify-center sm:justify-start">
      <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
      <Link to="/dashboard" className="hover:text-blue-600 font-medium">Dashboard</Link>
      <Link to="/clients" className="hover:text-blue-600 font-medium">Clients</Link>
      <Link to="/calendar" className="hover:text-blue-600 font-medium">Calendar</Link>
      <Link to="/appointments/new" className="hover:text-blue-600 font-medium">New Appointment</Link>
      <Link to="/invoices" className="hover:text-blue-600 font-medium">Invoices</Link>
      <Link to="/reports" className="hover:text-blue-600 font-medium">Reports</Link>
    </nav>
  );
}

export default NavBar;
