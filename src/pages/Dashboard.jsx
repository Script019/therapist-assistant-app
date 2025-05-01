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
    <div className="p-4 sm:p-6 space-y-8 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Welcome back, Therapist 👋</h2>

      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Next Appointment</h3>
        <p className="text-gray-800">
          <strong>{nextAppointment.name}</strong> — {nextAppointment.type}
        </p>
        <p className="text-sm text-gray-500">{nextAppointment.time}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-5 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">{item.value}</p>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Reminders</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {reminders.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
