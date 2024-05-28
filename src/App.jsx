/* eslint-disable no-unused-vars */
import { useState } from "react";

//importar los modulos de Firebase
import appFirebase from "../src/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);

//importar los componentes
import Login from "../src/components/Login"; //Dice que hay un error pero es mentira
import Index from "../src/components/Index";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

  return <div>{user ? <Index userCorreo={user.email} /> : <Login />}</div>;
}

export default App;
