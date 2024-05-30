/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../css/BlocNotas.css";
import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Index = ({userCorreo}) => {
  return <div>



    <div className="o">

    <h2>Bienvenido Usuario {userCorreo} <button className="btn-primary" onClick={()=>{
      signOut(getAuth())
    }}>Cerrar sesion</button></h2>
    </div>
  </div>;
};

export default Index;

//Crespo aca coloca el blog de notas, guiate de los videos de que te pase 🫠