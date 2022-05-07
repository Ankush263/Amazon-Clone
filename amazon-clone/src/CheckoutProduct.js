import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className='checkoutProduct__rating'>
          {Array(rating).fill().map((rate) => (
            <p>🌟</p>
          ))}
        </p>
        <button>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct