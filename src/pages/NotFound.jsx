import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 – Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="text-blue-600 underline text-sm">
        ← Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
