import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './components/home/HomePage.js';
import BookingPage from './components/booking/BookingPage';
import BookingsList from './components/booking/BookingsList';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="booking" component={BookingPage} />
    <Route path="seatings" component={BookingsList} />
  </Route>
);
