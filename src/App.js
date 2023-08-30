import "./App.css";
import HeaderComponent from "./components/header/header";
import MainContainer from "./components/main/mainContainer";
// import Counter from "./components/x/counter";
import { connect } from "react-redux";
function App({ testStore }) {
  return (
    <div>
      <HeaderComponent />
      <MainContainer Rolls={testStore} />
    </div>
  );
}

export default connect(
  (state) => ({ testStore: state }),
  (dispatch) => ({})
)(App);
