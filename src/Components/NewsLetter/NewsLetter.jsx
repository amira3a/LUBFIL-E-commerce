import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsLetter'>
       <h1>Get Exclusive Offers On Your Email</h1>
       <p>Subscribe our newsletter and stay updated</p>
       <div>
        <input type="email" placeholder='Your Email'/>
        <button>Subscribe</button>
       </div>
    </div>
  )
}
