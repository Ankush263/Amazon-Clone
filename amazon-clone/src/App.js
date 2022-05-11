import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Payment from './Payment';
import { auth } from 'firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth().onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)

      if(authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
          
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
