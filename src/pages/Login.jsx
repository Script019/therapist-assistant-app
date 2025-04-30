function Login({ onLogin }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      onLogin(); // this triggers login
    };
  
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  