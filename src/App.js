import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
    </Fragment>
  );
};

export default App;
