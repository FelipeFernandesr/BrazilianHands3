import React from 'react'
import './index.scss'

const CardService = ({img, title, descr, text}) => {
  return (
    <div className="card_service">
      <div className="img_card">
        <div className='img_card_1'>
          <h1>{title}</h1>
          <p>{descr}</p>  
        </div>
        <img src={img} alt={title} /> 
      </div>
      
      <p className='text_card'>{text}</p>
    </div>
  )
}

export default CardService
