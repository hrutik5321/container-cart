import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Cart} path="/cart" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
