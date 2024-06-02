import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { replaceTkn, deleteTkn } from "../features/jsonTokenSlice";
import { signUpAPICall } from "../APICalls/signup.apicall";
import { errorTexts } from "../Constants";

function Signup() {
  const dispatch = useDispatch();

  const tokenValue = useSelector((state) => state.user.jsonToken);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const signUpCallback = (data) => {
    if (data) {
      if (data.token) dispatch(replaceTkn(data.token));
      else if (data.statusCode) setError(data.message);
    } else setError(errorTexts.ops);
  };

  const signUp = (e) => {
    e.preventDefault();
    setError("");
    if (
      !password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      setError(errorTexts.passwordRequirements);
      return;
    }
    signUpAPICall(name, email, password, signUpCallback);
  };

  return (
    <div className="App">
      <div className="container">
        <h2 id="sign-up-heading">Sign Up</h2>
        <form onSubmit={signUp}>
          <div className="form_group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="fullName"
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="password"
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="errorDiv" hidden={!error}>
            <p className="errorP">{[error]}</p>
          </div>
          <div className="form_group">
            <input type="submit" value="Sign Up" className="signup" />
          </div>
        </form>
        <Link to="/login">
          <p>Already have an Account</p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
