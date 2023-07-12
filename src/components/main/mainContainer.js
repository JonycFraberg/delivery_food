import React, { useState, useEffect } from "react";
import nextId from "react-id-generator";
import RollComponent from "../roll/rollComponent";
import BasketComponent from "../basket/basketComponents";
let initRolls = [
  {
    id: nextId(),
    name: "Филадельфия хит ролл",
    count: "6",
    weight: "180",
    currency: "300",
    img: "assets/img/roll/philadelphia.jpg",
    counter: 0,
  },
  {
    id: nextId(),
    name: "Калифорния темпура",
    count: "6",
    weight: "205",
    currency: "250",
    img: "assets/img/roll/philadelphia.jpg",
    counter: 0,
  },
  {
    id: nextId(),
    name: "Запеченый ролл «Калифорния»",
    count: "6",
    weight: "182",
    currency: "230",
    img: "assets/img/roll/philadelphia.jpg",
    counter: 0,
  },
  {
    id: nextId(),
    name: "Филадельфия",
    count: "6",
    weight: "230",
    currency: "320",
    img: "assets/img/roll/philadelphia.jpg",
    counter: 0,
  },
];

const MainContainer = (props) => {
  const [rolls, setRolls] = useState(initRolls);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    console.log(rolls.counter);
    return () => {};
  }, [rolls]);
  // const [counter, setCounter] = useState(0);

  // function updateCounter(value) {
  //   setCounter(counter + value);
  //   console.log(counter);
  // }
  function updateRollCounter(value, id) {
    console.log(value);
    let newRolls = rolls.map((roll) => {
      if (roll.id === id) {
        return { ...roll, counter: roll.counter + value };
      }
      return roll;
    });
    setRolls(newRolls);
  }
  function updateCartCounter(value, id) {
    updateRollCounter(value, id);

    rolls.forEach((roll) => {
      if (roll.id === id) {
        let flag = false;
        let newBasket = basket.map((basketRoll) => {
          if (basketRoll.id === id) {
            flag = true;
            return {
              ...basketRoll,
              counter: basketRoll.counter + value,
            };
          }
          return basketRoll;
        });
        if (!flag) newBasket = [...basket, roll];
        setBasket(newBasket);
      }
    });
    // console.log(basket);
    // console.log(newBasket);
  }
  // rolls.map((roll) => {
  //   if (roll.id === id) {
  //     //roll.counter += value;
  //     let flag = false;
  //     let newBasket = basket.map((basketRoll) => {
  //       if (basketRoll.id === id) {
  //         flag = true;
  //         return { ...basketRoll, counter: basketRoll.counter + value };
  //       }
  //       return basketRoll;
  //     });
  //     if (!flag) newBasket = [...basket, roll];

  //     setBasket(newBasket);
  //   }
  //   return basket;
  // });

  const rows = rolls.map((roll) => {
    return (
      <RollComponent
        key={roll.id}
        id={roll.id}
        name={roll.name}
        count={roll.count}
        weight={roll.weight}
        currency={roll.currency}
        img={roll.img}
        counter={roll.counter}
        updateRollCounter={updateRollCounter}
        updateCartCounter={updateCartCounter}
      />
    );
  });
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {rows}
            {/* <RollComponent
              name="Филадельфия хит ролл"
              count="6"
              weight="180"
              currency="300"
              img="assets/img/roll/philadelphia.jpg"
              updateCounter={updateCounter}
            /> */}
          </div>
        </div>{" "}
        <div className="col-md-4">
          <BasketComponent basket={basket} />
        </div>
      </div>
    </div>
  );
};
export default MainContainer;
