import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import GridLayout from 'react-grid-layout';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Rating from '../../components/Rating'
import Price from '../../components/Price';

import './HomePage.css'
import { Products } from '../../datasets/products'

function HomePage() {

  // check if the user is supplier, then display only his products
  const is_supplier = false
  const sliderItems = Products

  return (
    <div className='homepage-body'>
      <div className='carousel-wrapper'>
        <Carousel 
          infiniteLoop 
          autoPlay 
          showStatus={false}
          showThumbs={false}
        >
          {sliderItems.map((item, index) => {
            return (
              <div key={index} className='product-card'>
                <img className='carousel-img' src={item.image.find(x => x.id == 0).path} />
                <div className='product-desc'>
                  <h2 className='product-title'>{item.title}</h2>
                  <Rating value={item.rating} text={`(${item.num_reviews})`}/>
                  <Price unity_price={item.unity_price} sell_by={item.sell_by} />
                  {!is_supplier && <Link to={item.path} className='btn'>Adaugă în coș</Link>}
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>

      <p className='app-desc'>
        la piață este locul unde poti cumpăra sau vinde produse locale.
      </p>
    
      <div className='categories'>
        {/* if it's supplier send him to his products */}
        <Link to=''>Fructe, <br/> legume</Link>
        <Link to=''>Carne, <br/>mezeluri</Link>
        <Link to=''>Lactate, <br/>ouă</Link>
        <Link to=''>Condimente, <br/>ceai</Link>
        <Link to=''>Cereale</Link>
        <Link to=''>Miere</Link>
        <Link to=''>Plante</Link>
        <Link to=''>Băuturi</Link>
      </div>
    </div>
  )
}

export default HomePage
