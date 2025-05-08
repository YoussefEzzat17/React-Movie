import React, { useState } from "react";
import { useNavigate } from "react-router";
import classes from "../Styles/Registration.module.css"; // تأكد أن الملف موجود

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Registering:", email, password);
      setLoading(false);
      navigate("/login");
    }, 1000);
  };

  return (
    <div className={`d-flex justify-content-center align-items-center min-vh-100 ${classes.container}`}>
      <div className={`${classes.card}`}>
        <h2 className={classes.title}>Sign up</h2>
        <form onSubmit={handleRegister}>
          <div className={classes.inputRow}>
            <input
              type="text"
              placeholder="First Name"
              className={classes.input}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className={classes.input}
              required
            />
          </div>

          <div className={classes.inputWithIcon}>
            <i className="bi bi-envelope-fill"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={classes.inputWithIcon}>
            <i className="bi bi-lock-fill"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
              <button type="submit" className={classes.button} disabled={loading}>
                {loading ? "Loading..." : "Sign up"}
              </button>
          </div>


          <p className={classes.footerText}>
            Already have an account? <a href="/login">Log in!</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
