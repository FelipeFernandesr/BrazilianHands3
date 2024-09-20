import React from 'react'
import './index.scss'

const CardService = ({img, title, descr, text}) => {
  return (
    <div className="card_service">
      <div className="img_card">
        <img src={img} alt={title} />
        <div className="title_card">
          <h1>{title}</h1>
          <p>{descr}</p>
        </div>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default CardService