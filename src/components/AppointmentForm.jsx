import { useState } from 'react';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    client: '',
    date: '',
    time: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 sm:p-8 max-w-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Schedule Appointment</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
          {/* Client Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Client Name</label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded text-sm"
              placeholder="e.g. Jane Smith"
            />
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded text-sm"
              >
                <option value="">Select time</option>
                <option>9:00 AM</option>
                <option>9:30 AM</option>
                <option>10:00 AM</option>
                <option>10:30 AM</option>
                <option>11:00 AM</option>
                <option>11:30 AM</option>
                <option>12:00 PM</option>
                <option>12:30 PM</option>
                <option>1:00 PM</option>
                <option>1:30 PM</option>
                <option>2:00 PM</option>
                <option>2:30 PM</option>
                <option>3:00 PM</option>
                <option>3:30 PM</option>
                <option>4:00 PM</option>
                <option>4:30 PM</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 p-2 border rounded text-sm"
              placeholder="e.g. Follow-up on last session..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Schedule Appointment
          </button>
        </form>
      ) : (
        <div className="bg-green-50 border border-green-300 p-6 rounded-xl shadow text-green-700 space-y-2">
          <h3 className="text-xl font-semibold">Appointment Scheduled!</h3>
          <p><strong>Client:</strong> {formData.client}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Notes:</strong> {formData.notes || 'None'}</p>
        </div>
      )}
    </div>
  );
}

export default AppointmentForm;
