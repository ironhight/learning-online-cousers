import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
// import "./App.css";

function App() {
  console.log("run app");
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
