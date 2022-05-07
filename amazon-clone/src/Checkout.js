import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal';

import checkout_ad from '../src/images/checkout_ad.jpg'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
          <img
            className='checkout__ad' 
            src={checkout_ad}
            alt=""
          />

        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {/* checkoutProduct */}
          {/* checkoutProduct */}
          {/* checkoutProduct */}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout