import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${window.location.origin}/signup`, {
        name,
        email,
        password,
      });
      console.log(result);
      setSuccess("Registration successful! Redirecting to login...");
      setError(null);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error(err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="signup-container">
        <div className="signup-form">
          <h2 className="signup-header">Register Here!!</h2>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="signup-input-group">
              <label htmlFor="name" className="signup-label">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                autoComplete="off"
                className="signup-input"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="signup-input-group">
              <label htmlFor="email" className="signup-label">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                className="signup-input"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signup-input-group">
              <label htmlFor="password" className="signup-label">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="signup-input"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="signup-button" disabled={!name || !email || password.length < 6}>
              Register
            </button>
          </form>
          <p className="signup-footer-text">Already have an account?</p>
          <Link to="/login" className="signup-login-btn">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
