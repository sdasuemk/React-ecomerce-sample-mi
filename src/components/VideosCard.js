import React from 'react'
import '../styles/VideosCard.css'
const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M19.15 32.5 32.5 24 19.15 15.5ZM24 44Q19.9 44 16.25 42.425Q12.6 40.85 9.875 38.125Q7.15 35.4 5.575 31.75Q4 28.1 4 24Q4 19.9 5.575 16.25Q7.15 12.6 9.875 9.875Q12.6 7.15 16.25 5.575Q19.9 4 24 4Q28.1 4 31.75 5.575Q35.4 7.15 38.125 9.875Q40.85 12.6 42.425 16.25Q44 19.9 44 24Q44 28.1 42.425 31.75Q40.85 35.4 38.125 38.125Q35.4 40.85 31.75 42.425Q28.1 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31 41 36 36Q41 31 41 24Q41 17 36 12Q31 7 24 7Q17 7 12 12Q7 17 7 24Q7 31 12 36Q17 41 24 41Z"/></svg>

const VideosCard = ({name,image,index}) => {
  return (
    <div className='videoCard' style={{backgroundImage:`url(${image})`}}>
        {/* <img src={image} alt={`${image}`} srcset="" /> */}
        <a href='/#'>{playButton}</a>
    </div>
  )
}

export default VideosCard