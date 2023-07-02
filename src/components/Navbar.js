import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <h1 className="nav--title">Farm House</h1>
      <div className="nav--items">
        <p className="nav--item">Home</p>
        <p className="nav--item">About</p>
        <p className="nav--item">Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
