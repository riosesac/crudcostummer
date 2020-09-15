import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import User from "./Custommer/Custommer";
import UserCreate from "./Custommer/CustommerCreate";
import UserUpdate from "./Custommer/CustommerUpdate";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={User} />
                <Route exact path="/user/create" component={UserCreate} />
                <Route exact path="/user/update/:id" component={UserUpdate} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
