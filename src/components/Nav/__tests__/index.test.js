import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  // baseline test
  it("renders", () => {
    render(<Nav />);
  });

  // snapshot test
  it("matches component", () => {
    const { asFragment } = render(<Nav />);
    //asser the value comparison
    expect(asFragment).toMatchSnapshot();
  });
});

// to check if camera emoji renders
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // Arrange parts of components that need to be accessed
    const { getByLabelText } = render(<Nav />);
    // Assert
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

// check link visibility
describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    const { getByTestId } = render(<Nav />);
    // Assert
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About");
  });
});
