import React from 'react';
import './Checkout.css'

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

        </div>
      </div>

      <div className='checkout__right'>
        <h2>The subtitle go here</h2>
      </div>
    </div>
  )
}

export default Checkout