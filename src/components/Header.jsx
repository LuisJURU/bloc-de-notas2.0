/* eslint-disable react/prop-types */
// import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import "../css/Header.css";
import NavBar from "./NavBar";

const Header = ({ userCorreo }) => {
  return (
    <div className="header">
      <h2>Bienvenido Usuario {userCorreo}</h2>
      <NavBar></NavBar>
    </div>
  );
};

export default Header;
<button
  className="btn-primary"
  onClick={() => {
    signOut(getAuth());
  }}
>
  Cerrar sesion
</button>;
