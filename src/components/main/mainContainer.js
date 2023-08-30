import React, { useState, useEffect } from "react";
import RollComponent from "../roll/rollComponent";
import BasketComponent from "../basket/basketComponents";

const MainContainer = ({ Rolls }) => {
  const [rolls, setRolls] = useState(Rolls.RollReducer);

  const rows = rolls.map((roll) => {
    return (
      <RollComponent
        key={roll.id}
        id={roll.id}
        name={roll.name}
        count={roll.count}
        weight={roll.weight}
        currency={roll.currency}
        img={roll.img}
      />
    );
  });
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-8">
          <div className="row">{rows}</div>
        </div>{" "}
        <div className="col-md-4">
          <BasketComponent />
        </div>
      </div>
    </div>
  );
};
export default MainContainer;
