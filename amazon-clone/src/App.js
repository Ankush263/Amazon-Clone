import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from 'firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const promise = loadStripe("pk_test_51KyTYDSBWqHPKSDa9HWJ1UPQY8Z4VB4CzMVIEGFtj2KU6BrJ01cdfUCuqgtQoH8jTB5jqCxcApMcumznvpJjNTlH00WgzyzHa4")

function App() {
  const [{}, dispatch] = useStateValue()

  // const stripe = useStripe()
  // const elements = useElements()

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
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
