import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../App';
import Details from './Details';


const Router = () => (
    <BrowserRouter>

    <Switch>
        <Route path="/" component={App} exact />
        <Route path="/details/:label" component={Details} />
    </Switch>

    </BrowserRouter>
);

export default Router;