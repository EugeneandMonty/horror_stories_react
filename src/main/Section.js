import React from 'react'
import StoryCard from './StoryCard'


const Section = ({data}) => {

  return ( 
     
      <div className='slider'>
      
          {data.map((card) => 
          <StoryCard
          key = {card.id}
          title = {card.title}
          author = {card.author}
          desc = {card.desc}
          img_link = {card.img_link}
          />
          )}

      </div>

  )
}

export default Section