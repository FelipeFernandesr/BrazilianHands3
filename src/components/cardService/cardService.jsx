import React from 'react'
import './index.scss'

const CardService = ({img, title, descr, text}) => {
  return (
    <div className="card_service">
      <div className="img_card">
        <img src={img} alt={title} />
          <h1>{title}</h1>
      </div>
      <p>{descr}</p>  
      <p className='text_card'>{text}</p>
    </div>
  )
}

export default CardService
