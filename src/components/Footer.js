import React from 'react';

import logo from '../resources/logo/logo.png';
import facebook from '../resources/icons/facebook.svg';
import whatsapp from '../resources/icons/whatsapp.svg';
import instagram from '../resources/icons/instagram.svg';
import address from '../resources/icons/address.svg';


export const Footer = () => {
    return (
        <div id='footer'>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <a href="/"><img id='footer-logo' src={logo} alt='logo' /></a>
                    <p className="footer-links">
                        <a href="/" className="link-1">HOME &nbsp;</a>
                        <a href="/gallery">GALLERY &nbsp;</a>
                        <a href="/services">SERVICES &nbsp;</a>
                        <a href="/about/me">ABOUT ME &nbsp;</a>
                        <a href="/about/mehndi">ABOUT MEHNDI &nbsp;</a>
                    </p>

                </div>

                <div className="footer-center">

                    <div>
                        <img alt='address' src={address} />
                        <h6>105, 5th street, Poongothai nagar,</h6>
                        <h6>Sitra, Coimbatore</h6>
                        <h6><a href="tel:+919600234795">+91 - 9600234795</a></h6>
                        <h6><a href="mailto:lavanyashenna@gmail.com">lavanyashenna@gmail.com</a></h6>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About Lavanya's Henna</span>
                        I can do Mehndi / Henna for just about any occasion. 
                        I Specialize in Bridal Mehndi, Sangeet Parties, Engagements, Baby Showers, Birthday Parties, Ladies Night outs, School Events, Corporate Events and Fundraisers. 
                        I love to extend this art form onto cakes and other mediums like wood, glass and candles
				</p>

                    <div className="footer-icons">

                        <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><img alt='a' src={facebook} /></a>
                        <a href="https://api.whatsapp.com/send?phone=+919600234795" rel="noopener noreferrer" target="_blank"><img alt='a' src={whatsapp} /></a>
                        <a href="https://www.instagram.com/lavanyamj_henna/" target='_blank' rel="noopener noreferrer"><img alt='a' src={instagram} /></a>

                    </div>

                </div>
                <p className="footer-company-name">Lavanya's Henna © 2020</p>

            </footer>
        </div>
    );
}


export default Footer;