import { useState, useEffect } from "react";
import classes from "./rollBasketComponent.module.css";
import classNames from "classnames";

const BasketRollComponent = (props) => {
  const [counter, setCounter] = useState(props.counter);

  return (
    <div className={classes.cart_item}>
      <div className={classes.cart_item__top}>
        <div className={classes.cart_item__img}>
          <img src={props.img} alt="" />
        </div>
        <p>{props.counter}</p>
        <div className={classes.cart_item__desc}>
          <div className={classes.cart_item__title}>{props.name}</div>
          <div className={classes.cart_item__weight}>
            {props.count} шт. / {props.weight} г.
          </div>

          <div className={classes.cart_item__details}>
            <div
              className={classNames(
                classes.items,
                classes.items__small,
                classes.counter_wrapper
              )}
            >
              <div
                className={classes.items__control}
                onClick={() => {
                  counter > 1 ? setCounter(counter - 1) : setCounter(1);
                }}
              >
                -
              </div>
              <div className={classes.items__current}>{counter}</div>
              <div
                className={classes.items__control}
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                +
              </div>
            </div>

            <div className={classes.price}>
              <div className={classes.price__currency}>{props.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BasketRollComponent;
