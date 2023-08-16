import nextId from "react-id-generator";
const initRolls = [
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
export default function testReducer(state = initRolls, action) {
  if (action.type === "TEST_ACTION") {
    return [...state, action.test];
  }
  //console.log(action);
  return state;
}
