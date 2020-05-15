import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Router } from "@reach/router";

import Homepage from "./views/Homepage"
import DisplayPeople from "./views/Display_people"
import DisplayPlanet from "./views/Display_planet"

function App() {


  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <DisplayPeople path="/people/:id" />
        <DisplayPlanet path="/planets/:id" />
        <Redirect from ="home" to="/" noThrow="true" />
      </Router>

    </div>
  );
}

export default App;
