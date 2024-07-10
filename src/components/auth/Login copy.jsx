

// eslint-disable-next-line react/prop-types
function Login({ onClose }) {
  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    onClose(); // Close the modal after successful login (replace with actual logic)
  };

  return (
    <div className="form">
      <h2>Login to your account</h2>
      <form onSubmit={handleLogin}>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className="form-field submit">
          <button type="submit">Login now</button>
        </div>
      </form>
      <p>Don&apos;t Have An Account? <a href="#">Sign up</a></p>
    </div>
  );
}

export default Login