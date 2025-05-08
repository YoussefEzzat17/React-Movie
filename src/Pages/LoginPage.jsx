import React, { useState } from "react";
import { useNavigate } from "react-router";
import classes from "../Styles/Login.module.css"; // نفس اسم ملف CSS المعدل

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Logging in with:", username, password);
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className={`d-flex justify-content-center align-items-center min-vh-100 ${classes.container}`}>
      <div className={classes.card}>
        <h2 className={classes.title}>Login</h2>
        <form onSubmit={handleLogin}>
          <div className={classes.inputWithIcon}>
            <i className="bi bi-person-fill"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={classes.inputWithIcon}>
            <i className="bi bi-lock-fill"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-check text-light mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="form-check-label" htmlFor="showPassword">
              Show Password
            </label>
          </div>

          <button type="submit" className={classes.button} disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          <p className={classes.footerText}>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
