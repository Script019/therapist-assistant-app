import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white shadow px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-gray-700">
        <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
        <Link to="/dashboard" className="hover:text-blue-600 font-medium">Dashboard</Link>
        <Link to="/clients" className="hover:text-blue-600 font-medium">Clients</Link>
        <Link to="/calendar" className="hover:text-blue-600 font-medium">Calendar</Link>
        <Link to="/appointments/new" className="hover:text-blue-600 font-medium">New Appointment</Link>
        <Link to="/invoices" className="hover:text-blue-600 font-medium">Invoices</Link>
        <Link to="/reports" className="hover:text-blue-600 font-medium">Reports</Link>
      </div>
    </nav>
  );
}

export default NavBar;
