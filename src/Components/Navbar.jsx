import React from "react";
import { Link } from "react-router"; 
import Classes from "../Styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3`}>
      <div className="container">
        <Link className={`navbar-brand fs-4 fw-bold me-5 ${Classes.brand}`} to="/">MovieApp 🎬</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto gap-3">
            <li className="nav-item">
              <Link className={`nav-link fs-5 ${Classes.navLink}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-5 ${Classes.navLink}`} to="/movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-5 ${Classes.navLink}`} to="/add-movie">Add Movie</Link>
            </li>
          </ul>

    
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className={`nav-link fs-5 ${Classes.navLink}`} to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <span className="text-white">|</span> 
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-5 ${Classes.navLink}`} to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
