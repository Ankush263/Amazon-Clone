import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue()
  let totalPrice = 0
  
  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length}{basket?.length <= 1 ? ' item' : ' items'}):
              <strong>
                {basket.forEach(element => (
                  totalPrice += element.price
                ))}${totalPrice}
              </strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal