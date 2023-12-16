import { Provider } from "react-redux";
import "./App.css";
import RouteManager from "./routes/routes";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouteManager />
      </Provider>
    </>
  );
}

export default App;
