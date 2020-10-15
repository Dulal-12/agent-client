import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import ServicesOfUser from './components/userDetail/ServicesOfUser/ServicesOfUser';
import Review from './components/Review/Review';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DynamicService from './components/userDetail/ServicesOfUser/DynamicService';

export const user = createContext();

function App() {
  const [loggedInuser,setLoggedInuser] = useState({});
  return (
    <user.Provider value={[loggedInuser,setLoggedInuser]}>
      <Router>
    <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
       
        <Route path="/service">
         <DynamicService></DynamicService>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route> 
        <PrivateRoute path="/order/:id">
         <Order></Order>
        </PrivateRoute>
        


       
    </Switch>
   
</Router>

</user.Provider>

  );
}

export default App;
