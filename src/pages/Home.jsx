function Home() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Therapist Assistant</h1>
      <p className="text-lg text-gray-600">
        Your calm, organized space to manage clients, track sessions, and keep your therapy practice flowing smoothly.
      </p>

      <div className="bg-white rounded-xl shadow p-6 mt-6 space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">Why Use This App?</h2>
        <ul className="text-left list-disc list-inside text-gray-600 space-y-1">
          <li>Track clients and their progress</li>
          <li>Log sessions and session notes</li>
          <li>Manage appointments and schedules</li>
          <li>View invoices and get paid</li>
          <li>See trends with visual reports</li>
        </ul>
      </div>

      <blockquote className="italic text-gray-500 mt-10">
        “Healing takes time, and asking for help is a courageous step.” — Mariska Hargitay
      </blockquote>
    </div>
  );
}

export default Home;
