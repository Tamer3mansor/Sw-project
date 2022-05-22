import "../src/css/bootstrap.css";
import Nav from "./componants/home/Nav";
import Text from "./componants/home/Text";
import Login from "./componants/home/Login";
import End from "./componants/home/End";
import RegistrationForm from "./componants/home/RegistrationForm";
import ProtectedRoutes from "./componants/ProtectedRoutes";
import React from "react";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="header clearfix">
              <Menu />
              <h3 className="text-muted">Bookeroo</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">{this.props.children}</div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <footer className="footer"></footer>
          </div>
          <Nav></Nav>
          <Routes>
            <Route
              path="/Registr"
              element={<RegistrationForm></RegistrationForm>}
            />
            <Route path="/confirm" element={<End></End>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/About" element={<h1>Place holder about ppage </h1>} />
            <Route path="/" element={<Text></Text>} />
            <Route element={<ProtectedRoutes />}>
              <Route
                path="/profile"
                element={<h1>put profile componand here</h1>}
              />
              <Route
                path="/bookings"
                element={<h1>put bookings componand here</h1>}
              />
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
