/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Index = ({userCorreo}) => {
  return <>
    <h2>Bienvenido Usuario {userCorreo} <button className="btn-primary" onClick={()=>{
      signOut(getAuth())
    }}>Cerrar sesion</button></h2>
  </>;
};

export default Index;

//Crespo aca coloca el blog de notas, guiate de lops videos de que te pase 🫠