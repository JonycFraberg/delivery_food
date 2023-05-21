import React from "react";
import classes from "./header.module.css";

const HeaderComponent = (props) => (
  <div className={classes.header}>
    <div className={"container text-center"}>
      <img src="assets/img/logo/logo.svg" width="92" alt="Суши и пицца" />
      <div className="display-4">Доставка роллов</div>
      <p className="lead">Оперативно и вкусно</p>
    </div>
  </div>
);
export default HeaderComponent;
