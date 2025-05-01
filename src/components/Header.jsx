function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
          🧠 Therapist Assistant
        </h1>
        <span className="mt-2 sm:mt-0 text-sm text-blue-200">
          Helping You Stay Focused
        </span>
      </div>
    </header>
  );
}

export default Header;
