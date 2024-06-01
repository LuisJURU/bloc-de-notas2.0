/* eslint-disable react/prop-types */
// import React from 'react'
import "../css/Header.css";
import NavBar from "./NavBar";

const Header = ({ userCorreo, addNote }) => {
  return (
    <div className="header">
      <h2>Bienvenido {userCorreo}</h2>
      <NavBar addNote={addNote}/>
    </div>
  );
};

export default Header;
