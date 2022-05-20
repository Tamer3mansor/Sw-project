import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, CssBaseline, Container, Toolbar } from "@material-ui/core";

import "../../styles.css";

import Header from "../../components/header/header";
import ErrorBoundaries from "../../components/error-boundaries/error-boundaries";
const Dashboard = lazy(() => import("./dashboard"));
const Confirmation = lazy(() => import("../confirmation/confirmation"));
const FlightSearch = lazy(() => import("../search/flight-search"));
const FlightBooking = lazy(() => import("../booking/flight-booking"));

const Home = () => {
  return (
    <div className="root">
      <CssBaseline />
      <Router>
        <Header />
        <Toolbar />
        <Container>
          <Grid container styles={{ marginTop: 100 }}>
            <Grid item xs={12} sm={12}>
              <ErrorBoundaries>
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route path={`/`} exact={true} component={Dashboard} />
                    <Route
                      exact={true}
                      path={`/flight-search`}
                      component={FlightSearch}
                    />
                    <Route
                      exact={true}
                      path={`/flight-booking`}
                      component={FlightBooking}
                    />
                    <Route
                      exact={true}
                      path={`/confirmation`}
                      component={Confirmation}
                    />
                  </Switch>
                </Suspense>
              </ErrorBoundaries>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </div>
  );
};

export default Home;
