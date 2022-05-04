import React from 'react'
import './Home.css'

import sliding_img_1 from '../src/images/sliding_img_1.jpg'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img 
          className='home__image'
          src={sliding_img_1}
          alt='sliding image 1'
        />
      </div>

      <div className='home__row'>
        <Product />
        <Product />
      </div>

      <div className='home__row'>
        {/* Product */}
        {/* Product */}
        {/* Product */}
      </div>

      <div className='home__row'>
        {/* Product */}
      </div>
    </div>
  )
}

export default Home