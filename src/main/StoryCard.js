import React from 'react'

const StoryCard = (props) => {

  return (

        <a className='content' href='#' style={{backgroundImage: `url(${props.img_link})`}}>
        <div className='title_author'>
            <div className='ttl_com'>
                <p className='ttl'>{props.title}</p>
                <p className='ttl'>{props.author}</p>     
            </div>
            <p className='description'>{props.desc}</p>
        </div>                
    </a>
    
  )
}

export default StoryCard