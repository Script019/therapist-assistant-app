function Home() {
    return (
      <div className="p-8 max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Therapist Assistant</h1>
        <p className="text-lg text-gray-600">
          Your simplified companion for managing sessions, clients, and invoices —
          designed to help you stay focused on what truly matters: your clients.
        </p>
  
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Why This App?</h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2 text-left">
            <li>Easily view and manage client profiles</li>
            <li>Track sessions and add notes effortlessly</li>
            <li>Keep invoices organized and up-to-date</li>
          </ul>
        </div>
  
        <blockquote className="italic text-gray-500 mt-10">
          “The greatest healing therapy is friendship and love.” — Hubert H. Humphrey
        </blockquote>
      </div>
    );
  }
  
  export default Home;
  