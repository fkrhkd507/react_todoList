import React from "react";
import Todolist from "./router/Todolist";
import Navber from "./router/Navber";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Navber />
        <Switch>
          <Route path="/todo" component={ Todolist }/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
