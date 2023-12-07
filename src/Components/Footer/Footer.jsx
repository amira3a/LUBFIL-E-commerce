import React from 'react'
import './Footer.css'
import footerLogo from '../Assets/logo.png'
import instagram from '../Assets/instagram.png'
import whatsapp from '../Assets/whatsapp.png'
import facebook from '../Assets/facebook.png'



export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerLogo} alt="" />
            <p>LUBFIL</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram} alt="" width={50} />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="" width={45} />
            </div>
            <div className="footer-icons-container">
                <img src={facebook} alt="" width={45} />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>

    </div>
  )
}
