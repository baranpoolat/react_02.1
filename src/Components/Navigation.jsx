import React from "react";

const Navigation = ({ brand, classes }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${classes}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active">Home</a>
            <a className="nav-link" href="#">
              Services
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
