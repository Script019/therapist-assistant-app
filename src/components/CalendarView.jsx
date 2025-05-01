import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarView() {
  const [date, setDate] = React.useState(new Date());

  const appointments = [
    {
      id: 1,
      client: 'Emily Carter',
      type: 'Individual Therapy',
      date: 'May 3, 2025',
      time: '2:00 PM',
    },
    {
      id: 2,
      client: 'Mark Benson',
      type: 'Couples Session',
      date: 'May 4, 2025',
      time: '10:00 AM',
    },
    {
      id: 3,
      client: 'Ava Johnson',
      type: 'Follow-up',
      date: 'May 5, 2025',
      time: '1:30 PM',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Appointment Calendar</h2>

      <div className="bg-white p-4 rounded-lg shadow max-w-md mx-auto">
        <Calendar onChange={setDate} value={date} />
        <p className="mt-4 text-gray-600 text-sm text-center">
          Selected date: {date.toDateString()}
        </p>
      </div>

      <div className="mt-8 max-w-xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Upcoming Appointments</h3>
        <ul className="space-y-3">
          {appointments.map((appt) => (
            <li
              key={appt.id}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <p className="font-medium text-gray-800">{appt.client}</p>
                <p className="text-sm text-gray-500">{appt.type}</p>
              </div>
              <div className="text-right text-sm text-gray-600">
                <p>{appt.date}</p>
                <p>{appt.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CalendarView;
