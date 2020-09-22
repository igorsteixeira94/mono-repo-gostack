import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import DeliveryMan from '../pages/DeliveryMan';
import NewDeliveryMan from '../pages/NewDeliveryMan';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/deliverymans" exact component={DeliveryMan} isPrivate />
      <Route
        path="/deliverymans/:id"
        exact
        component={NewDeliveryMan}
        isPrivate
      />
      <Route path="*" component={NotFound} isPrivate />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
