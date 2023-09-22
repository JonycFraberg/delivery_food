import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import classes from "./orderComponent.css";
import classNames from "classnames";
import OrderRollComponent from "./orderRoll/orderRoll";
const Order = ({ Order }) => {
  const [show, setShow] = useState(false);
  const rows = Order.rolls
    ? Order.rolls.map((roll) => {
        if (roll.inBasket) {
          return (
            <OrderRollComponent
              name={roll.name}
              count={roll.basketCount}
              img={roll.img}
            />
          );
        }
      })
    : "";
  return (
    <div
      className={
        Order.show ? classNames("order", "show") : classNames("order", "none")
      }
    >
      {!show ? (
        <div className="order_check">
          <button className="close">x</button>
          <h3 className="order_title">Ваш заказ</h3>
          <div className="order_rolls">{rows}</div>
          <div className="adress">
            <span className="h5">Доставка по адрессу:</span>{" "}
            <span className="adress">{Order.adress}</span>{" "}
            <span className="h5">Телефон:</span>{" "}
            <span className="phone">{Order.phone}</span>{" "}
          </div>
          <div className="price">
            <span className="h5">Сумма к оплате:</span>{" "}
            <span className="total_price">{Order.price}</span>{" "}
            <span className="rouble">₽</span>
          </div>
          <button onClick={() => setShow(true)}>Оформить заказ</button>
        </div>
      ) : (
        <div className="order_check">
          <h3 className="order_title">Ваш заказ оформлен</h3>
        </div>
      )}
    </div>
  );
};
export default connect(
  (state) => ({ Order: state.OrderReducer }),
  (dispatch) => ({})
)(Order);
