import React from "react";
import logo from "../../assets/simbol.svg";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom mb-5">
      <a className="navbar-brand" href="/">
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="logo"
        />
        GitHubSearcher
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link " href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/users">
              Search
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
