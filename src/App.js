import React from 'react';
import './App.css';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
    </Switch>
   
</Router>
  );
}

export default App;
