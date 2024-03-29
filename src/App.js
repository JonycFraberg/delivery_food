import "./App.css";
import HeaderComponent from "./components/header/header";
import MainContainer from "./components/main/mainContainer";
// import Counter from "./components/x/counter";
import { connect } from "react-redux";
import Order from "./components/order/orderComponent";
function App({ Rolls }) {
  return (
    <div>
      <HeaderComponent />
      <Order />
      <MainContainer Rolls={Rolls} />
    </div>
  );
}

export default connect(
  (state) => ({ Rolls: state }),
  (dispatch) => ({})
)(App);
