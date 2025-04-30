const mockInvoices = [
  { id: 'INV-001', client: 'John Doe', amount: '$150', status: 'Unpaid' },
  { id: 'INV-002', client: 'Jane Smith', amount: '$200', status: 'Paid' },
];

function Invoices() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Invoices</h2>
      <div className="bg-white rounded-lg shadow p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2">Invoice #</th>
              <th className="py-2">Client</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockInvoices.map((invoice) => (
              <tr key={invoice.id} className="border-b">
                <td className="py-2">{invoice.id}</td>
                <td>{invoice.client}</td>
                <td>{invoice.amount}</td>
                <td className={`font-medium ${invoice.status === 'Paid' ? 'text-green-600' : 'text-red-500'}`}>
                  {invoice.status}
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
