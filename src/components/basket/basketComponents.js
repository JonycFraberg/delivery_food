import React, { useState, useEffect } from "react";
import "./basketComponent.css";
import classNames from "classnames";
import BasketRollComponent from "./rollBasket/rollBasketComponent";
import { connect } from "react-redux";

const BasketComponent = ({ Rolls, Order }) => {
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  let orderCounter = 0;
  let price = 0;

  const rollsBasket = Rolls.RollReducer.map((roll) => {
    if (roll.inBasket) {
      price =
        price < 2000
          ? price + 300 + roll.basketCount * roll.currency
          : price + roll.basketCount * roll.currency;

      orderCounter = orderCounter + 1;
      return (
        <BasketRollComponent
          key={roll.id}
          id={roll.id}
          name={roll.name}
          count={roll.count}
          weight={roll.weight}
          currency={roll.currency}
          img={roll.img}
          basketCount={roll.basketCount}
        />
      );
    }
  });
  const order = (
    <div className="cart_wrapper">
      {rollsBasket}
      <div className={classNames("cart_total")}>
        <p>
          <span className="h5">Доставка:</span>{" "}
          <span className={classNames("delivery_cost", "free")}>
            {price < 2000 && orderCounter !== 0 ? (
              <span>300р</span>
            ) : (
              <span>Бесплатно</span>
            )}
          </span>{" "}
        </p>
        <p>
          <span className="h5">Итого:</span>{" "}
          <span className={"total_price"}>{price}</span>{" "}
          <span className={"rouble"}>₽</span>
        </p>
      </div>
    </div>
  );
  const orderForm = (
    <div className={classNames("card-body", "border-top")}>
      <h5 className="card-title">Оформить заказ</h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Order(price, Rolls.RollReducer, phone, adress, true);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Ваш номер телефона"
            value={phone}
            onChange={(e) => {
              // e.preventDefault();
              setPhone(e.target.value);
            }}
          />{" "}
          <input
            type="text"
            className="form-control"
            placeholder="Ваш адрес (улица,дом,кв)"
            value={adress}
            onChange={(e) => {
              // e.preventDefault();
              setAdress(e.target.value);
            }}
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
export default connect(
  (state) => ({ Rolls: state }),
  (dispatch) => ({
    Order: (price, rolls, phone, adress, show) => {
      const order = {
        rolls: rolls,
        price: price,
        phone: phone,
        adress: adress,
        show: true,
      };
      dispatch({ type: "ORDER", order });
    },
  })
)(BasketComponent);
