import React from 'react'
import './index.scss'

const CardService = ({img, title, descr, text}) => {
  return (
    <div className='card'>
      <div>
        <img src={img} alt={title} />
        <div>
          <h1>{title}</h1>
          <p>{descr}</p>
        </div>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default CardService