import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Fragment>
        <header className="header flex items-center justify-center gap-x-5 text-white py-5 mb-5">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Movies
          </NavLink>
        </header>
      </Fragment>
    </div>
  );
};

export default Header;
