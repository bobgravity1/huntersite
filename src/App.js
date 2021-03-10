// components
import Nav from './components/Nav'
import Homepage from './components/Homepage'
import React, {useState, useContext} from "react";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

// pages
import About from './components/pages/About'
import Stories from './components/pages/Stories'
import News from './components/pages/News'
import ThemeContext from './ThemeContext';




// imports
function App() {
  const [open, setOpen]=useState(false)
  const ok=useContext(ThemeContext)

  return (
    <>
<Router>

  <ThemeContext.Provider value={{open, setOpen}}>
    <Nav />
  <Route path='/' exact>
    <Homepage />

  </Route>

  <Route path='/about' component={About} exact />
  <Route path='/stories' component={Stories} exact />
  <Route path='/news' component={News} exact />
  </ThemeContext.Provider>
</Router>
    </>
  );
}

export default App;
