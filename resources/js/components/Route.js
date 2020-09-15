import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
const Main = props => (
    <div>
        <Switch>
            <Route exact path="/" component={User} />
        </Switch>
    </div>
);
export default Main;
