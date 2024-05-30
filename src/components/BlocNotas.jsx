/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../css/BlocNotas.css";
import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Index = ({ userCorreo }) => {
  return (
    <>
      <div className="container-bloc">
        <div className="o">
          <h2>
            Bienvenido Usuario {userCorreo}{" "}
            <button
              className="btn-primary"
              onClick={() => {
                signOut(getAuth());
              }}
            >
              Cerrar sesion
            </button>
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              repellat quam illum aut a asperiores aperiam, delectus velit nihil
              porro, deleniti, praesentium impedit voluptas reiciendis quo
              voluptatem. Deserunt, ab minima.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              repellat quam illum aut a asperiores aperiam, delectus velit nihil
              porro, deleniti, praesentium impedit voluptas reiciendis quo
              voluptatem. Deserunt, ab minima.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              repellat quam illum aut a asperiores aperiam, delectus velit nihil
              porro, deleniti, praesentium impedit voluptas reiciendis quo
              voluptatem. Deserunt, ab minima.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              repellat quam illum aut a asperiores aperiam, delectus velit nihil
              porro, deleniti, praesentium impedit voluptas reiciendis quo
              voluptatem. Deserunt, ab minima.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              repellat quam illum aut a asperiores aperiam, delectus velit nihil
              porro, deleniti, praesentium impedit voluptas reiciendis quo
              voluptatem. Deserunt, ab minima.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              repellat quam illum aut a asperiores aperiam, delectus velit nihil
              porro, deleniti, praesentium impedit voluptas reiciendis quo
              voluptatem. Deserunt, ab minima.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              repellat quam illum aut a asperiores aperiam, delectus velit nihil
              porro, deleniti, praesentium impedit voluptas reiciendis quo
              voluptatem. Deserunt, ab minima.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
