import React from 'react'
import './Product.css'
import TheLeanStartup from '../src/images/the-lean-startup.jpg'

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>The lean startup</p>
        <p className='product__price'>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className='product__rating'>
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </div>
      </div>

      <img 
        src={TheLeanStartup}
        alt=''
      />
    </div>
  )
}

export default Product