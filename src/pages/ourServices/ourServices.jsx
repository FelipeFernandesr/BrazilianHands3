import React from 'react'
import './index.scss'
import CardService from '../../components/cardService/cardService'

const OurServices = () => {
  return (
    <div>
      <h1>Titulo</h1>
      <p>texto</p>
      <div>
        <CardService
          img = "/services1.svg" 
          title = "Residential Cleaning"
          descr = "Transform Your Home with Our Professional Cleaning and Deep Clean Services!"
          text = "Our expert cleaners will make your home sparkle from top to bottom. Whether you need regular weekly cleaning or a comprehensive deep clean, we take care of every detail with precision and care. Enjoy a spotless home without lifting a finger - let us handle all your cleaning needs!"
        />
      </div>
    </div>
  )
}

export default OurServices