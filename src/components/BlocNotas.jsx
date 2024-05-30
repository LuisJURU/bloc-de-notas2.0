/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../css/BlocNotas.css";
import React from "react";
import Header from "./Header";

const Index = ({ userCorreo }) => {
  return (
    <>
      <div className="container-bloc">
        <div className="in-bloc">
          <div>
            {/* Aca se immporta el NavBar del bloc de notas */}
            <Header userCorreo={userCorreo} />
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
