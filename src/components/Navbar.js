import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./imgs/logo121.png";
import DarkLight from "./DarkLight";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#70bef5" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <span
                style={{ fontFamily: "Kaushan Script", fontSize: "23.5px" }}
              >
                <img
                  src={logo}
                  alt="logo"
                  /*width="30"
                height="24"*/
                  className="d-inline-block align-text-top mx-2"
                />
                NewsWalk
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>

              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    borderRadius: "8px",
                    width: "200px",
                  }}
                />
              </form>
              <DarkLight />
            </div>
          </div>
        </nav>
      </>
    );
  }
}
