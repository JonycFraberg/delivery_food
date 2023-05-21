import React, { useState } from "react";
import classes from "./basketComponent.module.css";
import classNames from "classnames";

const BasketComponent = (props) => {
  const [orderCounter, setOrderCounter] = useState(0);
  const order = (
    <div className="cart-wrapper">
      <div className={classNames(classes.cart_total)}>
        <p>
          <span className="h5">Доставка:</span>{" "}
          <span className={classNames("delivery-cost", "free")}>бесплатно</span>{" "}
        </p>
        <p>
          <span className="h5">Итого:</span>{" "}
          <span className={classes.total_price}>0</span>{" "}
          <span className={classes.rouble}>₽</span>
        </p>
      </div>
    </div>
  );
  const orderForm = (
    <div id="order-form" className={classNames("card-body", "border-top")}>
      <h5 className="card-title">Оформить заказ</h5>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Ваш номер телефона"
          />
        </div>
        <button type="submit" className={classNames("btn", "btn-primary")}>
          Заказать
        </button>
      </form>
    </div>
  );
  const emptyBasket = (
    <div
      data-cart-empty
      className={classNames("alert", "alert-secondary")}
      role="alert"
    >
      Корзина пуста
    </div>
  );
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Ваш заказ</h5>
        {orderCounter === 0 ? emptyBasket : order}
      </div>
      {orderCounter === 0 ? " " : orderForm}
    </div>
  );
};
export default BasketComponent;
