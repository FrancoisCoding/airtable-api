import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Landing from "./components/Landing";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/form" component={Form} />
      </Switch>
    </div>
  );
};

export default Routes;
