import React from 'react'
import VideosCard from './VideosCard'
import "../styles/Videos.css"

function Videos({videos}) {
  return (
    <div className='videos'>
        {
            videos.map((item,index) => (
                <VideosCard key={item.image} image={item.image} name={item.name} index={index} /> 
            ))
        }
    </div>
  )
}

export default Videos