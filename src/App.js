import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import About from "./components/About";
import Chart from "./components/Chart";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Pokedex from "./components/Pokedex";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="/chart">
        <Chart />
      </Route>
      <Route path="/chart">
        <Chart />
      </Route>
      <Route path="/pokedex">
        <Pokedex />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Link to="/">Home</Link>

    </div>
  );
}

export default App;

