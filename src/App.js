import "./App.css";
import HeaderComponent from "./components/header/header";
import MainContainer from "./components/main/mainContainer";
import Counter from "./components/x/counter";
function App() {
  return (
    <div>
      <counter />
      <HeaderComponent />
      <MainContainer />
    </div>
  );
}

export default App;
