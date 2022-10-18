import React from 'react'
import StoryCard from './StoryCard'
import data from './data'

  

const Section = () => {

let len = data.length;
let numbers = []; 
let data_changed = [];

for (let i=0; i<len; i++) {
  if (i % 8 === 0 && i !== 0) {
    numbers.push(i);
    data_changed = data.slice(i, len);
    // console.log(data_changed);
  }
}

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