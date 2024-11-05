import { Provider } from "react-redux";
import store from "../store";
import MainContainer from "./container/MainContainer";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
