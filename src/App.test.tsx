import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing App component", () => {
  it("Should render App component to the screen", () => {
    render(<App />);
    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();
  });
  it("Should render Header component to the screen", () => {
    render(<App />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  it("Should render Main component to the screen", () => {
    render(<App />);
    const main = screen.getByTestId("main");
    expect(main).toBeInTheDocument();
  });
  it("Should render Footer component to the screen", () => {
    render(<App />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
