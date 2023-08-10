import React from "react";
import "../index.css";
import { BsArrowRightShort } from "react-icons/bs";

const Navabar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar_heading fixed-top">
        <div className="container">
          <a className="navbar-brand" href=".">
            USEIND
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="/"
                    id="navbarDarkDropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        a. Who we are
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        b. Why USEIND?
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        c. How USEIND protects you
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        d. USEIND X Ministry of External Affairs
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className="btn btn-outline-dark ms-3 px-3"
                  id="navbarDarkDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SIGN UP
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Signup using Google - OTP
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Signup using Email
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Signup using phone - OTP
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className="btn btn-dark ms-3 px-3"
                  id="navbarDarkDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LOGIN
                  <BsArrowRightShort className="ms-2" />
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Profile
                    </a>
                    <ul className="dropdown-menu dropdown-submenu dropdown-menu-dark"  aria-labelledby="navbarDarkDropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="/">Membership plan:</a>
                    </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Call Log
                    </a>
                    <ul className="dropdown-menu dropdown-submenu dropdown-menu-dark"  aria-labelledby="navbarDarkDropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="/">Transcripts</a>
                    </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navabar;
