import React from 'react'

function Card({icon, title, describtion}) {
  
  return (
    <div className='card'>
      <div className="img">
        <img src={icon} alt="icon" />
      </div>
 
      <div className='descrption'>
        <span>{title}</span>
        <p>{describtion}</p>
      </div>
    </div>
  )
}

export default Card
