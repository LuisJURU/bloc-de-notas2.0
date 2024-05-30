/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import appFirebase from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(appFirebase);

const Login = () => {

  const [register, setRegister] = useState(false);
  // Definir el estado para el mensaje de error
  const [errorMessage, setErrorMessage] = useState(null);

  const funcAuth = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    

    if(register){
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        // Actualizar el estado con el mensaje de error
        setErrorMessage('Hubo un error al crear la cuenta');
        setTimeout(() => setErrorMessage(null), 3000); // Desaparecerá después de 3 segundos
      }
    }else{
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        // Actualizar el estado con el mensaje de error
        setErrorMessage('Hubo un error al iniciar sesión');
        setTimeout(() => setErrorMessage(null), 3000); // Desaparecerá después de 3 segundos
      }
    }
};

  return (
    <div className="form-container">
      <h1>{register ? "Registrate" : " Iniciar Sesion"}</h1>
      <p>Ingresa tus datos</p>
      <form id="login-form" onSubmit={funcAuth}>
        <label htmlFor="user" className="sr-only">
          Usuario
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ingresa tu Email"
        />

        <label htmlFor="password" className="sr-only">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
        />

        <button type="submit">
          {register ? "Registrate" : "Iniciar sesion"}
        </button>
              {/* Mostrar el mensaje de error si existe */}
      {errorMessage && <p className="txt-danger">{errorMessage}</p>}
      </form>
      <p>

        {register ? "¿Ya tiene cuenta?" : "¿No tienes cuenta?"}
        <button
          className="p-btn"
          onClick={() => {
            setRegister(!register);
          }}
        >
          
          {register ? "Inicia sesion" : "Registrate"}
        </button>{" "}
      </p>
    </div>
  );
};

export default Login;