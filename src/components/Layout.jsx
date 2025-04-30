function Layout({ children }) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </div>
    );
  }
  
  export default Layout;
  