import { useState, useEffect } from "react";
import classes from "./rollBasketComponent.module.css";
import classNames from "classnames";
import { connect } from "react-redux";

const BasketRollComponent = ({
  Rolls,
  img,
  key,
  name,
  count,
  weight,
  currency,
  id,
  basketCount,
  price,
  addInBasket,
  deleteFromBasket,
}) => {
  return (
    <div className={classes.cart_item}>
      <div className={classes.cart_item__top}>
        <div className={classes.cart_item__img}>
          <img src={img} alt="" />
        </div>
        <div className={classes.cart_item__desc}>
          <div className={classes.cart_item__title}>{name}</div>
          <div className={classes.cart_item__weight}>
            {count} шт. / {weight} г.
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
                  basketCount > 1 ? addInBasket(id, -1) : addInBasket(id, 0);
                }}
              >
                -
              </div>
              <div className={classes.items__current}>{basketCount}</div>
              <div
                className={classes.items__control}
                onClick={() => {
                  addInBasket(id, 1);
                }}
              >
                +
              </div>
            </div>
            <div
              className={classes.del_roll_btn}
              onClick={() => {
                console.log(id);
                deleteFromBasket(id);
              }}
            >
              <img
                className={classes.del_roll_img}
                src="assets/img/del_roll.png"
                alt="no_pic"
              />
            </div>
            <div className={classes.price}>
              <div className={classes.price__currency}>{price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(
  (state) => ({ Rolls: state }),
  (dispatch) => ({
    addInBasket: (id, count) => {
      const roll = { id: id, count: count };
      dispatch({ type: "ADD_IN_BASKET", roll });
    },
    deleteFromBasket: (id) => {
      dispatch({ type: "DELETE_FROM_BASKET", id });
    },
  })
)(BasketRollComponent);
