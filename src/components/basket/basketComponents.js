import React, { useState, useEffect } from "react";
import classes from "./basketComponent.module.css";
import classNames from "classnames";
import BasketRollComponent from "./rollBasket/rollBasketComponent";

const BasketComponent = (props) => {
  const [orderCounter, setOrderCounter] = useState(1);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    console.log(props.basket);
    return () => {};
  });

  const rollsBasket = props.basket.map((roll) => {
    return (
      <BasketRollComponent
        key={roll.id}
        id={roll.id}
        name={roll.name}
        count={roll.count}
        weight={roll.weight}
        currency={roll.currency}
        img={roll.img}
        counter={roll.counter}
      />
    );
  });
  const order = (
    <div className={classes.cart_wrapper}>
      {rollsBasket}
      <div className={classNames(classes.cart_total)}>
        <p>
          <span className="h5">Доставка:</span>{" "}
          <span className={classNames(classes.delivery_cost, classes.free)}>
            бесплатно
          </span>{" "}
        </p>
        <p>
          <span className="h5">Итого:</span>{" "}
          <span className={classes.total_price}>{price}</span>{" "}
          <span className={classes.rouble}>₽</span>
        </p>
      </div>
    </div>
  );
  const orderForm = (
    <div className={classNames("card-body", "border-top")}>
      <h5 className="card-title">Оформить заказ</h5>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Ваш номер телефона"
          />
          <button type="submit" className={classNames("btn", "btn-primary")}>
            Заказать
          </button>
        </div>
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
