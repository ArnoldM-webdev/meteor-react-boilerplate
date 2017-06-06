import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from '../../ui/pages/Home';
import NotFound from '../../ui/pages/NotFound';

export const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="*" component={NotFound}/>
    </Router>
);