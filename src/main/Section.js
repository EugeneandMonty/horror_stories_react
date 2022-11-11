import React from 'react'
import StoryCard from './StoryCard'


const Section = ({data}) => {

  return ( 
     
      <div className='slider'>
      
          {data.map((card) => 
          <StoryCard
          key = {card._id}
          title = {card.title}
          author = {card.author}
          desc = {card.short_description}
          img_link = {card.story_image}
          />
          )}

      </div>

  )
}

export default Section