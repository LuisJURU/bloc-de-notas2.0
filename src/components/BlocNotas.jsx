/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../css/BlocNotas.css";
import React, { useState, useEffect } from "react";
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../credenciales";

import Swal from "sweetalert2";
import witReactContent from "sweetalert2-react-content";
const MySwal = witReactContent(Swal);

import Header from "./Header";

const Index = ({ userCorreo }) => {
  const [titulo, setTitulo] = useState([]);
  const hola = "hola";


  return (
    <>
      <div className="container-bloc">
        <div className="in-bloc">
          <div>
            {/* Aca se immporta el NavBar del bloc de notas */}
            <Header userCorreo={userCorreo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
