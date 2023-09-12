import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          FoodieHub
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes">
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipemanager">
                My Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li>
            </ul>
            <Link className="btn btn-info mx-2" to="/signup">
                SignUp
            </Link> 
            <Link className="btn btn-info mx-2" to="/login">
                Login
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
