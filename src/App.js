import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  // this is JSX. unlike HTML, you don't need to add it as a string because you're using webpack and React.
  // add all components here to import them, should be named as the exported function
  return (
    <div className="App">
      <main>
        <Nav></Nav>
        <About></About>
      </main>
    </div>
  );
}

export default App;
