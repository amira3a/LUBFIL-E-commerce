import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Rerum quos laborum, similique quis,
                nemo quo, soluta sint iste eveniet commodi cupiditate veniam debitis? Accusamus perferendis ipsa,
                 praesentium molestias sapiente repellat!
                 </p>
        </div>

    </div>
  )
}
