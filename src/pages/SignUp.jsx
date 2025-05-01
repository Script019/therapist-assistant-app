import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign up successful! Please log in.');
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Account</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border rounded mt-1 text-sm"
            placeholder="Choose a username"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            required
            className="w-full px-3 py-2 border rounded mt-1 text-sm"
            placeholder="Choose a password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm font-medium"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
