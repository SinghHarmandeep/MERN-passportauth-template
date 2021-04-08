import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import home from './Components/home';
import error from './Components/pageNotFound';
import contact from './Components/contact';
import login from './Components/login';
import register from './Components/register';

import Navbar from './Components/navbar';

const dd = () => {
    return (
        <Router>
                <Navbar />
            <Switch>
                <Route exact path = '/contact' component = {contact} />
                <Route exact path = '/login' component = {login} />
                <Route exact path = '/signup' component = {register} />
                <Route exact path = '/' component = {home} />
                <Route path = '/*' component = {error} />
            </Switch>
        </Router>
    )
}

export default dd;