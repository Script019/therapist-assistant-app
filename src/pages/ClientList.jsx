import { Link } from 'react-router-dom';

const mockClients = [
  { id: '1', name: 'John Doe', lastSession: 'April 25, 2025' },
  { id: '2', name: 'Jane Smith', lastSession: 'April 20, 2025' },
];

function ClientList() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Client List</h2>
      <ul className="space-y-4">
        {mockClients.map((client) => (
          <li key={client.id} className="bg-white rounded-lg shadow p-4">
            <p className="text-lg font-medium">{client.name}</p>
            <p className="text-sm text-gray-500 mb-2">Last session: {client.lastSession}</p>
            <Link to={`/clients/${client.id}`} className="text-blue-600 underline text-sm">
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientList;
