import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginAPICall } from "../APICalls/login.apicall";
import { useDispatch } from "react-redux";
import { replaceTkn } from "../features/jsonTokenSlice";
import { errorTexts } from "../Constants";

function Login() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const loginCallback = (data) => {
    if (data) {
      if (data.token) dispatch(replaceTkn(data.token));
      else if (data.statusCode) setError(data.message);
    } else setError(errorTexts.ops);
  };

  const login = (e) => {
    e.preventDefault();
    loginAPICall(email, password, loginCallback);
  };

  return (
    <div className="App">
      <div className="container">
        <h2 data-testid="login-heading">Login</h2>
        <form onSubmit={login}>
          <div className="form_group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="email"
              name="email"
              id="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="errorDiv" hidden={!error}>
            <p className="errorP">{[error]}</p>
          </div>
          <div className="form_group">
            <input type="submit" value="Login" className="signup" />
          </div>
        </form>
        <Link to="/">
          <p>Do not have an Account? Signup</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
