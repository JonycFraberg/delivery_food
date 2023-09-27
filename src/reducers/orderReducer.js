const RollsOrder = [];
export default function OrderReducer(state = RollsOrder, action) {
  if (action.type === "ORDER") {
    return {
      ...state,
      rolls: action.order.rolls,
      price: action.order.price,
      phone: action.order.phone,
      adress: action.order.adress,
      show: action.order.show,
    };
  }
  if (action.type === "ORDER_SHOW") {
    return {
      ...state,
      show: action.show,
    };
  }
  return state;
}
