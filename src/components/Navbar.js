import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import pokeball from "../img/pokeball.svg";
import "./styles/Navbar.css";



class Navbar extends Component {
  render() {
  
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark Navbar__color">
          <div className="container-fluid">
            <Link className="Navbar__brand nav-item nav-link mr-3" to="/">
              <img
                className="Navbar__brand-logo"
                src={pokeball}
                alt="pokeball-img"
              />
              <span className="font-weight-light">Poke </span>
              <span className="font-weight-bold">Dex  </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item" id= "home">
                  <Link className="Navbar__brand nav-item nav-link" to="/">
                    <span className="font-weight-light">Home</span>
                  </Link>
                </li>
                <li className="nav-item" id= "search">
                  <Link className="Navbar__brand nav-item nav-link" to="/search">
                    <span className="font-weight-light">Search</span>
                  </Link>
                </li>
                <li className="nav-item" id= "trainer">
                  <Link className="Navbar__brand nav-item nav-link" to="/trainer">
                    <span className="font-weight-light">trainer</span>
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
