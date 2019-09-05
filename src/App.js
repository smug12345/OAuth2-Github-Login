import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


import LoginForm from './components/Authentication/Login';
import Redirect from './components/Authentication/Redirect';
import Cards from './components/Layout/Cards';


function App() {

  return (
    <Router>
  <Route path="/" exact component={LoginForm} />
  <Route path="/redirect" component={Redirect} /> 
  <Route path="/cards" component={Cards} />
    </Router>

  );
}

export default App;


