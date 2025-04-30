function Dashboard() {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Welcome back, Therapist!</h2>
  
        <section style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <h3>📅 Next Appointment</h3>
          <p>John Doe – April 30, 2025 at 2:00 PM</p>
        </section>
  
        <section style={{ marginBottom: '1rem' }}>
          <h3>📋 Quick Stats</h3>
          <ul>
            <li>Total Clients: 12</li>
            <li>Upcoming Appointments: 5</li>
            <li>Open Invoices: 3</li>
          </ul>
        </section>
  
        <section>
          <h3>🔔 Reminders</h3>
          <p>Send invoices by Friday. Prep for team session review Monday.</p>
        </section>
      </div>
    );
  }
  
  export default Dashboard;
  