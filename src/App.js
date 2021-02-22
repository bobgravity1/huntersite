// components
import Nav from './components/Nav'
import About from './components/About'
import Homepage from './components/Homepage'
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";



// imports
function App() {
  return (
    <>
    <Router>

    <Nav />
    <Route path='/' exact>
    <Homepage />
    </Route>
    <Route path='/about' exact>
    <About />
    </Route>
    </Router>
    </>
  );
}

export default App;
