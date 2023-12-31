/***** REACT COMPONENTS  *****/
import React from "react";
/***** COMPONENTS  *****/
import Card from "../components/TakeAway/Card";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";

const CartaTakeAway = () => {
  const data = useContext(ThemeContext);

  const [theme] = data;
  return (
    <section className={theme}>
      <div className="flex flex-wrap justify-center px-4 py-2 mt-20 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100">
        <h1>CARTA TAKE AWAY</h1>
      </div>

      <Card />
    </section>
  );
};

export default CartaTakeAway;
