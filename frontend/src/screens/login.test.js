import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";

jest.mock("../APICalls/login.apicall");

const mockStore = configureStore([]);

describe("Login Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: { jsonToken: "" }
    });

    store.dispatch = jest.fn();
  });

  test("renders Login component", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("login-heading")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByText("Do not have an Account? Signup")
    ).toBeInTheDocument();
  });
});
