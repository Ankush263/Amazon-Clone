import React from 'react'
import './Home.css'

import Product from './Product'

import sliding_img_1 from '../src/images/sliding_img_1.jpg'
import TheLeanStartup from '../src/images/the-lean-startup.jpg'
import kMix from '../src/images/kMix.jpg'
import watch from '../src/images/watch.jpg'
import alexa from '../src/images/alexa.jpg'
import ipad from '../src/images/ipad.jpg'
import tv from '../src/images/tv.jpg'


const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img 
          className='home__image'
          src={sliding_img_1}
          alt='sliding pic 1'
        />
      </div>

      <div className='home__row'>
        <Product 
          id="12321341"
          title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
          price={29.99}
          image={TheLeanStartup} 
          rating={5}
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image={kMix}
        />
      </div>

      <div className='home__row'>
        <Product
          id="4903850"
          title="Fillbit wrist watch Model LC47TG89SSVBHS 12' water proof digital"
          price={199.99}
          rating={3}
          image={watch}
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image={alexa}
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image={ipad}
        />
      </div>

      <div className='home__row'>
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image={tv}
        />
      </div>
    </div>
  )
}

export default Home