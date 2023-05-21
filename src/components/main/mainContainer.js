import React from "react";

import RollComponent from "../roll/rollComponent";
import BasketComponent from "../basket/basketComponents";

const MainContainer = (props) => (
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
          />
          <RollComponent
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
          />
        </div>
      </div>{" "}
      <div class="col-md-4">
        <BasketComponent />
      </div>
    </div>
  </div>
);
export default MainContainer;
