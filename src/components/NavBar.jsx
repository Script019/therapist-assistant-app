function NavBar({ onNavigate }) {
  return (
    <nav className="bg-gray-100 px-4 py-2 shadow-md flex gap-4">
      <button
        className="text-sm font-medium text-gray-700 hover:text-blue-600"
        onClick={() => onNavigate('dashboard')}
      >
        Dashboard
      </button>
      <button
        className="text-sm font-medium text-gray-700 hover:text-blue-600"
        onClick={() => onNavigate('clients')}
      >
        Clients
      </button>
    </nav>
  );
}

export default NavBar;
