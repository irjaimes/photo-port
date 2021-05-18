// react is needed to enable the components to function properly so we can test them.
import React from "react";

// incorporate the React Testing Library
import { render, cleanup } from "@testing-library/react";

// import the jest-dom package
import "@testing-library/jest-dom";

// import the About Component
import About from "..";

// we'll call the cleanup function using the afterEach global function from jest
// this will ensure taht after each test, we wont have any leftover memory datat that could give us false results
afterEach(cleanup);

// use the describe function to declare the component we're testing
// first argument is string 'About component' declares which component is being tested
describe("About component", () => {
  // 1st test - baseline to verify that the componenet is rendering
  // first argument 'renders' is a string that declares what is being tested
  // second argument is a callback funtion that runs the test
  it("renders", () => {
    // if passing, render function will have a checkmark next to it
    render(<About />);
  });

  // 2nd test - the test case - we'll compare the snapshot version of the DOM node structure. A snapshot is a serialized version of the DOM node structure, enabled by jest.
  it("matches snaphot DOM node structure", () => {
    // here we'll use the the asFragment function, which returns a snapshot of the About component.
    const { asFragment } = render(<About />);
    // here we'll test and compare whether expectation matches test result
    expect(asFragment()).toMatchSnapshot();
  });
});
