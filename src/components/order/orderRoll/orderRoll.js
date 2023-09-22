import { useState, useEffect } from "react";
import "./orderRolls.css";
import classNames from "classnames";
import { connect } from "react-redux";

const OrderRollComponent = ({ img, name, count }) => {
  return (
    <div className="roll">
      <img className="roll_img" src={img} alt="" />
      <div className="roll_details">
        <span className="roll_name">{name}</span>
        <span className="roll_count">Количество : {count}</span>
      </div>
    </div>
  );
};
export default OrderRollComponent;
