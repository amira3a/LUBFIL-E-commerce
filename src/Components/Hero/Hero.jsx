import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown  } from '@fortawesome/free-solid-svg-icons'
import heroImage from '../Assets/hero.jpg'
import waveHand from '../Assets/wave-hand.png'


export const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero-left">
        <h2>New Products</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={waveHand} alt="" width={100} />
            </div>
            <p>products</p>
            <p>for all</p>
        </div>
        <div className="hero-latest-btn">
        <div>Latest Products</div>
        <FontAwesomeIcon icon={faArrowDown} />
        </div>
       </div>
       <div className="hero-right">
            <img src={heroImage} alt=''  height={500}/>
       </div>
    </div>
  )
}
