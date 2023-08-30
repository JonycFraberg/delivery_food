import nextId from "react-id-generator";
const Rolls = [
  {
    id: nextId(),
    name: "Филадельфия хит ролл",
    count: "6",
    weight: "180",
    currency: "300",
    img: "assets/img/roll/philadelphia.jpg",
  },
  {
    id: nextId(),
    name: "Калифорния темпура",
    count: "6",
    weight: "205",
    currency: "250",
    img: "assets/img/roll/philadelphia.jpg",
  },
  {
    id: nextId(),
    name: "Запеченый ролл «Калифорния»",
    count: "6",
    weight: "182",
    currency: "230",
    img: "assets/img/roll/philadelphia.jpg",
  },
  {
    id: nextId(),
    name: "Филадельфия",
    count: "6",
    weight: "230",
    currency: "320",
    img: "assets/img/roll/philadelphia.jpg",
  },
];
export default function RollReducer(state = Rolls, action) {
  if (action.type === "ADD_IN_BASKET") {
    // console.log(action.roll.id, action.roll.count);
    let new_state = state.map((roll) => {
      if (roll.id === action.roll.id) {
        return {
          ...roll,
          inBasket: true,
          basketCount: roll.basketCount
            ? action.roll.count + roll.basketCount
            : action.roll.count,
        };
      } else {
        return { ...roll };
      }
    });

    // console.log(new_state);
    return new_state;
    ///return [...state, action.rolls];
  } else if (action.type === "DELETE_FROM_BASKET") {
    let new_state = state.map((roll) => {
      if (roll.id === action.id) {
        return {
          ...roll,
          inBasket: false,
          basketCount: 0,
        };
      } else {
        return { ...roll };
      }
    });

    // console.log(new_state);
    return new_state;
  }

  //console.log(action);
  else {
    return state;
  }
}
