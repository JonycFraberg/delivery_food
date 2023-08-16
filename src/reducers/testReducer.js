const initialState = [];
export default function testReducer(state = initialState, action) {
  if (action.type === "TEST_ACTION") {
    return [...state, action.test];
  }
  //console.log(action);
  return state;
}
