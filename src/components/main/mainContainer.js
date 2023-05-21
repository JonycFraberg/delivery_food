import React, { useState } from "react";

import RollComponent from "../roll/rollComponent";
import BasketComponent from "../basket/basketComponents";

const MainContainer = (props) => {
  const [x, setX] = useState(0);
  function updateX(value) {
    setX(x + value);
    console.log(x);
  }
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <RollComponent
              name="Филадельфия хит ролл"
              count="6"
              weight="180"
              currency="300"
              img="assets/img/roll/philadelphia.jpg"
              updateX={updateX}
            />
            {/* <RollComponent
              name="Калифорния темпура"
              count="6"
              weight="205"
              currency="250"
              img="assets/img/roll/philadelphia.jpg"
            />
            <RollComponent
              name="Запеченый ролл «Калифорния»"
              count="6"
              weight="182"
              currency="230"
              img="assets/img/roll/philadelphia.jpg"
            />
            <RollComponent
              name="Филадельфия"
              count="6"
              weight="230"
              currency="320"
              img="assets/img/roll/philadelphia.jpg"
            /> */}
          </div>
        </div>{" "}
        <div className="col-md-4">
          <BasketComponent counter={x} />
        </div>
      </div>
    </div>
  );
};
export default MainContainer;
