import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

import DeliveryMan from '../pages/DeliveryMan';
import NewDeliveryMan from '../pages/NewDeliveryMan';

import Recipient from '../pages/Recipient';
import NewRecipient from '../pages/NewRecipient';

import Deliveries from '../pages/Deliveries';
import NewDeliveries from '../pages/NewDeliveries';
import Problems from '../pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliveries/:id" exact component={NewDeliveries} isPrivate />

      <Route path="/deliverymans" exact component={DeliveryMan} isPrivate />
      <Route
        path="/deliverymans/:id"
        exact
        component={NewDeliveryMan}
        isPrivate
      />
      <Route path="/recipients" exact component={Recipient} isPrivate />
      <Route path="/recipients/:id" exact component={NewRecipient} isPrivate />

      <Route path="/problems" exact component={Problems} isPrivate />

      <Route path="*" component={NotFound} isPrivate />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
