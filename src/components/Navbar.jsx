import React from "react";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link to="/main/accounts" className="navbar-brand text-light">
          Accounts
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              <button
                type="button"
                className="b-none bg-dark border border-0"
                data-bs-dismiss="offcanvas"
              >
                <Link to="/main/accounts" className="navbar-brand text-light">
                  Accounts
                </Link>
              </button>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <button
                  type="button"
                  className="b-none bg-dark border border-0"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    to="/main/record"
                    className="nav-link active text-light "
                  >
                    Create a record
                  </Link>
                </button>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="b-none bg-dark border border-0"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    to="/main/tables"
                    className="nav-link active text-light"
                  >
                    See Tables
                  </Link>
                </button>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="b-none bg-dark border border-0"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    to="/main/log-out"
                    className="nav-link active text-light"
                  >
                    Log out
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavScrollExample;
