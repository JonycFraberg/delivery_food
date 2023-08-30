import { useState, useEffect } from "react";
import classes from "./rollComponent.module.css";
import classNames from "classnames";
import { connect } from "react-redux";

const RollComponent = ({
  img,
  name,
  count,
  weight,
  currency,
  id,
  addInBasket,
}) => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="col-md-6">
      <div className="card mb-4" data-id="01">
        <img className={classes.product_img} src={img} alt="" />
        <div className={classNames("card-body", "text-center")}>
          <h4 className={classes.item_title}>{name}</h4>
          <p>
            <small className="text-muted">{count} шт.</small>
          </p>

          <div className={classes.details_wrapper}>
            <div className={classNames(classes.items, "counter-wrapper")}>
              <div
                className={classes.items__control}
                onClick={() =>
                  counter > 1 ? setCounter(counter - 1) : setCounter(1)
                }
              >
                -
              </div>
              <div className={classes.items__current}>{counter}</div>
              <div
                className={classes.items__control}
                onClick={() => setCounter(counter + 1)}
              >
                +
              </div>
            </div>

            <div className={classes.price}>
              <div className={classes.price__weight}>{weight}г.</div>
              <div className={classes.price__currency}>{currency} ₽</div>
            </div>
          </div>

          <button
            data-cart
            type="button"
            className={classNames("btn", "btn-block", "btn-outline-warning")}
            onClick={() => {
              addInBasket(id, counter);
              setCounter(1);
            }}
          >
            Добавить в корзину
          </button>
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
  })
)(RollComponent);
