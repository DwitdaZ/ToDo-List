import React, { Fragment } from "react";

const navbar = props => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="void(0)">
              ToDo List
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default navbar;
