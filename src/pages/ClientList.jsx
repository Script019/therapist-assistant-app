const mockClients = [
    { id: 1, name: 'John Doe', lastSession: 'April 25, 2025' },
    { id: 2, name: 'Jane Smith', lastSession: 'April 20, 2025' },
    { id: 3, name: 'Mark Lee', lastSession: 'April 15, 2025' },
  ];
  
  function ClientList() {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Client List</h2>
        <ul>
          {mockClients.map((client) => (
            <li key={client.id} style={{ marginBottom: '1rem' }}>
              <strong>{client.name}</strong><br />
              Last session: {client.lastSession}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ClientList;
  