function Invoices() {
  const mockInvoices = [
    { id: 1, client: 'John Doe', amount: 150, date: 'April 25, 2025', status: 'Paid' },
    { id: 2, client: 'Jane Smith', amount: 120, date: 'April 20, 2025', status: 'Unpaid' },
    { id: 3, client: 'Emily Carter', amount: 175, date: 'April 18, 2025', status: 'Paid' },
  ];

  const statusColors = {
    Paid: 'text-green-700 bg-green-100',
    Unpaid: 'text-red-700 bg-red-100',
  };

  return (
    <div className="p-6 sm:p-8 max-w-5xl mx-auto space-y-6">
      <div className="text-center sm:text-left">
        <h2 className="text-3xl font-bold text-gray-800">Invoices</h2>
        <p className="text-sm text-gray-500">Review all recent client payments</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="text-xs text-gray-500 border-b">
              <th className="pb-2">Client</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockInvoices.map((inv) => (
              <tr
                key={inv.id}
                className="text-sm text-gray-700 border-t hover:bg-gray-50 transition"
              >
                <td className="py-3">{inv.client}</td>
                <td className="py-3">${inv.amount}</td>
                <td className="py-3">{inv.date}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[inv.status]}`}
                  >
                    {inv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Invoices;
