import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import { Provider } from "react-redux";
import toDoStore from "./Components/Pages/Redux/toDoStore";

function App() {
  return (
    <Provider store={toDoStore}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
