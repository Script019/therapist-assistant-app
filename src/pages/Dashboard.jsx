function Dashboard() {
  const nextAppointment = {
    name: 'Emily Carter',
    time: 'Tuesday, May 2nd at 2:00 PM',
    type: 'Individual Therapy',
  };

  const stats = [
    { label: 'Total Clients', value: 12 },
    { label: 'Sessions This Week', value: 8 },
    { label: 'Unpaid Invoices', value: 3 },
  ];

  const reminders = [
    'Send follow-up email to John.',
    'Submit insurance claim for Jane.',
    'Review progress notes before Friday.',
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Welcome back, Therapist 👋</h2>

      {/* Next Appointment */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Next Appointment</h3>
        <p className="text-gray-600">
          <strong>{nextAppointment.name}</strong> — {nextAppointment.type}
        </p>
        <p className="text-sm text-gray-500">{nextAppointment.time}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">{item.value}</p>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Reminders */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Reminders</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {reminders.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
