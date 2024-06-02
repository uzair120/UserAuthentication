import React from "react";
import { useDispatch } from "react-redux";
import { deleteTkn } from "../features/jsonTokenSlice";
function Home() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h4>Welcome to the application.</h4>
      <button
        className="homeButton"
        aria-label="Logout"
        onClick={() => dispatch(deleteTkn())}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
