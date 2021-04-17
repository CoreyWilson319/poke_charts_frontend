import { useState } from "react-router-dom"
import axios from "axios";

function Register() {
  return (
    <div>
        <h1>Register</h1>
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
          <label>
            Show Profile?:
            <input type="checkbox" name="public" />
          </label>
          <br />
            <input type="submit" name="submit" />
        </form>

    </div>
  );
}

export default Register;
