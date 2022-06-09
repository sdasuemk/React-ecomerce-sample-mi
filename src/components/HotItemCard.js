import React from 'react'
import "../styles/HotItemCard.css"

function HotItemCard({name,price,image}) {
  return (
    <div className='HotItemCard'>
        <img src={image} alt="" srcset="" />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}
export default HotItemCard;
