import React from 'react';
import './App.css';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
    </Switch>
   
</Router>
  );
}

export default App;
