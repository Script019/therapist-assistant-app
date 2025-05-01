import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
  } from 'recharts';
  
  const sessionData = [
    { week: 'Apr 1', sessions: 5 },
    { week: 'Apr 8', sessions: 8 },
    { week: 'Apr 15', sessions: 6 },
    { week: 'Apr 22', sessions: 9 },
  ];
  
  const invoiceData = [
    { status: 'Paid', value: 12 },
    { status: 'Unpaid', value: 4 },
  ];
  
  const COLORS = ['#4ade80', '#f87171']; // Tailwind green & red
  
  function Reports() {
    return (
      <div className="p-6 max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Reports & Analytics</h2>
  
        {/* Sessions Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Sessions per Week</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sessionData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sessions" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
  
        {/* Invoice Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Invoice Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={invoiceData}
                dataKey="value"
                nameKey="status"
                outerRadius={100}
                label
              >
                {invoiceData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  
  export default Reports;
  