import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center fixed-bottom">
      <p>
        © 2022 Copyright:{" "}
        <Link to="/main/accounts" className="navbar-brand text-light">
          My Accounts
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
