import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

const mockClients = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-1234',
    lastSession: 'April 25, 2025',
    notes: [
      'Discussed anxiety triggers',
      'Set goals for next 2 weeks',
      'Recommended mindfulness exercise',
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '555-5678',
    lastSession: 'April 18, 2025',
    notes: [
      'Reviewed CBT homework',
      'Talked through workplace conflict',
      'Scheduled next session',
    ],
  },
];

function ClientProfile() {
  const { id } = useParams();
  const clientData = mockClients.find((c) => c.id === id);

  const [notes, setNotes] = useState(clientData ? clientData.notes : []);
  const [newNote, setNewNote] = useState('');

  if (!clientData) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <p className="text-red-500 font-semibold">Client not found.</p>
        <Link to="/clients" className="text-blue-600 underline mt-2 block">← Back to Clients</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  return (
    <div className="p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
      <Link to="/clients" className="text-blue-600 underline">← Back to Clients</Link>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{clientData.name}</h2>

      {/* Contact Info */}
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md space-y-1 text-sm text-gray-700">
        <p><strong>Email:</strong> {clientData.email}</p>
        <p><strong>Phone:</strong> {clientData.phone}</p>
        <p><strong>Last Session:</strong> {clientData.lastSession}</p>
      </div>

      {/* Notes */}
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Session Notes</h3>
        {notes.length > 0 ? (
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            {notes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 italic mb-4">No notes added yet.</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Add New Session Note:</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded text-sm"
            rows="3"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Write your note here..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClientProfile;
