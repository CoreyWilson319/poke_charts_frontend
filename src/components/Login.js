import { useState } from "react-router-dom";
import axios from "axios";

function Login() {
  return (
    <div>
        <h1>Login</h1>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
            <input type="submit" name="submit" />
        </form>

    </div>
  );
}

export default Login;
