import { Link } from 'react-router-dom';

const mockClients = [
  { id: '1', name: 'John Doe', lastSession: 'April 25, 2025' },
  { id: '2', name: 'Jane Smith', lastSession: 'April 20, 2025' },
];

function ClientList() {
  return (
    <div className="p-6 sm:p-8 max-w-5xl mx-auto space-y-6">
      <div className="text-center sm:text-left">
        <h2 className="text-3xl font-bold text-gray-800">Client List</h2>
        <p className="text-sm text-gray-500">Click a client to view their details</p>
      </div>

      <ul className="space-y-4">
        {mockClients.map((client) => (
          <li
            key={client.id}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col sm:flex-row justify-between sm:items-center hover:shadow-lg transition"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{client.name}</p>
              <p className="text-sm text-gray-500">Last session: {client.lastSession}</p>
            </div>
            <Link
              to={`/clients/${client.id}`}
              className="mt-3 sm:mt-0 text-sm text-blue-600 hover:text-blue-800 underline font-medium"
            >
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientList;
