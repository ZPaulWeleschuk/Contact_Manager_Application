import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary ">
        <div className="container">
          <a className="navbar-brand fw-bold fs-5" href="/home">
            Contact Manager Application
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
