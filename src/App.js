import "../src/css/bootstrap.css"; 
import Nav from "./componand/Nav";
import Text from "./componand/Text";
import Login from "./componand/Login"
import End from "./componand/End";
import RegistrationForm from "./componand/RegistrationForm";
import ProtectedRoutes from "./componand/ProtectedRoutes";
import { Route, Routes } from "react-router-dom";
import './App.css';
import FlightApp from './componand/FlightApp';
import React from 'react';
import About from "./componand/About";

const App = () => {
  return (
    <div>
    <Nav></Nav>
      <Routes>
      <Route path="/Register" element={<RegistrationForm></RegistrationForm>}/>
      <Route path="/confirm" element={<End></End>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/About" element={<About></About>}/>
      <Route path="/search" element={<FlightApp/>}/>
      <Route path="/" element={<Text></Text>} />
      <Route element = {<ProtectedRoutes/>}>
        <Route path="/profile" element={<h1>put profile componand here</h1>} />  
        <Route path="/bookings" element={<h1>put bookings componand here</h1>} />  
      </Route>
        <Route path="*" element={<h1>Page Not Found</h1>}/> 
      </Routes>

      </div>
      
  );
};

export default App;
