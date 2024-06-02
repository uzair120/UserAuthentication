import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Signup from "./Signup";
import { MemoryRouter } from "react-router-dom";

jest.mock("../APICalls/signup.apicall");

const mockStore = configureStore([]);

describe("Signup Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: { jsonToken: "" }
    });

    store.dispatch = jest.fn();
  });

  test("renders Signup component", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Signup />
        </Provider>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Sign Up" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("Already have an Account")).toBeInTheDocument();
  });
});
