const RollsOrder = [];
export default function OrderReducer(state = RollsOrder, action) {
  if (action.type === "ORDER") {
    console.log(action.order.price);
    return { ...state, price: action.order.price };
  }
  return state;
}
