
import React, { Component } from 'react';

import MainNav from '../components/Nav';
import Footer from '../components/Footer';
import ContactPopUp from '../components/ContactPopUp';

import r8 from '../resources/images/r10.jpg';



class AboutMehndi extends Component {

    render() {
        return (
            <main>
                <MainNav />
                <div className="about-me">
                    <img src={r8} alt='mehndi' />
                    <h1>ABOUT MEHNDI</h1>
                    <h2>What is Mehndi?</h2>
                    <p>Mehndi is a temporary natural dye mainly used to produce intricate and decorative art-work on the skin. Mehndi is another word for henna.</p>
                    <p>With its artistic application on the skin, it has become an important expression of grand culture. The ancient art of mehndi varies in different countries and cultures.</p>
                    <p>Apart from the modern designs used as tattoos and body art, there are many distinguishable designs for mehndi as shown in the gallery.</p>
                    <hr />
                    <h2>Uses of Mehndi</h2>
                    <p>Mehndi can be used a cosmetic to dye the skin, hair and nails or it can be used for its healing and medicinal properties to cure skin disorders, hair thinning and providing resistance to the body from the tropical heat. It is also used to colour fabric and dye leather. On the skin, mehndi can be used as a decorative purpose. It is totally safe, natural and painless to use on the skin. The flowers from the henna plant are used to produce perfume.</p>
                    <p>Traditionally, mehndi was used by asian brides to symbolize love, happiness and prosperity for the couple. Nowadays, mehndi is not only used for weddings and religious occasions but also for trendy body art and tattoos around the naval, wrists, on the shoulders and anklets.</p>
                    <p>	In eastern cultures mehndi is mainly used for brides as a wedding tradition. For many brides the application of bridal mehndi is when they begin to feel the wedding vibes. Mehndi nights are now becoming a popular event for celebrating the nights before the wedding. Various themes like Arabic and Indian are used to set the mehndi night with music and dance.</p>
                    <hr />
                    <h2>Henna Plant</h2>
                    <p>Mehndi is a paste made from ground leaves of a shrub plant called Lawsonia Inermis. It grows in countries of hot tropical climates like India, Pakistan, North Africa, Middle East and other Asian Countries.</p>
                    <p>The best colour comes from the youngest leaves on top of the shoots. These leaves are dried and ground into a fine powder for different fineness, thickness, precision and smoothness.</p>
                    <p>The rest of the plant is dried and ground to make hair products like hair dyes and shampoos.</p>
                </div>
                <Footer />
                <ContactPopUp />
            </main>
        );
    }
}


export default AboutMehndi;