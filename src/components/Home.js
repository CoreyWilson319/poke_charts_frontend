import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

function Home() {
  return (
    <div>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link to="/chart">Chart</Link>
          </li>
        </ul>

    </div>
  );
}

export default Home;
