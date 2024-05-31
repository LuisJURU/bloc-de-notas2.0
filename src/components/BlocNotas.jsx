/* eslint-disable react-hooks/exhaustive-deps */
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
import Notes from "./Notes";

const Index = ({ userCorreo }) => {
  const [notas, setNotas] = useState([]);

  const notasCollection = collection(db, "notas");

  const getNotas = async () => {
    const data = await getDocs(notasCollection);

    // console.log(data.docs);
    setNotas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  console.log(notas);
  

  useEffect(() => {
    getNotas();
  }, []);

  return (
    <>
      <div className="container-bloc">
        <div className="in-bloc">
          <div>
            {/* Aca se immporta el NavBar del bloc de notas */}
            <Header userCorreo={userCorreo} />
          </div>
          <Notes></Notes>
        </div>
      </div>
    </>
  );
};

export default Index;
