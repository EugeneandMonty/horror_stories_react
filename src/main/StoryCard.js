import React from 'react'

const StoryCard = (props) => {

  return (

        <a className='content' href='#' style={{backgroundImage: `url(${props.img_link})`}}>
        <div className='title_author'>
            <div className='ttl_com'>
                <p className='ttl_title'>{props.title}</p>
                <p className='ttl_author'>{props.author}</p>     
            </div>
            <p className='description'>{props.desc}</p>
        </div>                
    </a>
    
  )
}

export default StoryCard