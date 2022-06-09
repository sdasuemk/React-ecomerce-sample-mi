import React from 'react'
import "../styles/NavCard.css"

function NavCard({name,image,price,index}) {
  return (
    <div className='NavCard'>
        <img src={image} alt={`${index} image`} srcset="" />
        <p>{name}</p>
        <span>{price}</span>

    </div>
  )
}

export default NavCard