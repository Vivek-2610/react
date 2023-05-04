import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      {" "}
     
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {props.title}
            </a>
          {/* <Link className="navbar-brand" to="/">
            {props.title}
          </Link> */}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  HelloS
                </a>
                {/* <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.abouttext}
                </a>
                {/* <Link className="nav-link" to="/about">
                  {props.abouttext}
                </Link> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/react">
                  React Componants
                </a>
                {/* <Link className="nav-link" to="/react">
                  React Componants
                </Link> */}
              </li>
            
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              {/* <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              /> */}
              {/* <label
                className="form-check-label mx-2"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label> */}
              <button
                type="button"
                className="btn btn-secondary btn-circle  mx-1"
                onClick={props.togglemodeblack}
              ></button>
              <button
                type="button"
                className="btn btn-primary btn-circle mx-1"
                onClick={props.togglemodeblue}
              ></button>
              <button
                type="button"
                className="btn btn-success btn-circle mx-1"
                onClick={props.togglemodegreen}
              ></button>
              <button
                type="button"
                className="btn btn-danger btn-circle mx-1"
                onClick={props.togglemodered}
              ></button>
              <button
                type="button"
                className="btn btn-warning btn-circle  mx-1"
                onClick={props.togglemodeyellow}
              ></button>
              <button
                type="button"
                className="btn btn-light btn-circle  mx-1"
                onClick={props.togglemodewhite}
              ></button>
            </div>
          </div>
        </div>
      </nav>
    
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
};
Navbar.defaultProps = { title: "Hello", abouttext: "About" };
