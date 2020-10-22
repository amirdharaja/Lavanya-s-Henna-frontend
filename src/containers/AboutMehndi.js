
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as userActions from '../store/actions/actions';

import MainNav from '../components/Nav';

import r8 from '../resources/images/r8.jpeg';



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
                    <hr />
                    <h2>Tips of Mehndi</h2>
                    <ul>
                        <li><p>The hotter you are, the darker the mehndi colour comes out on the skin.   The old wives tale goes “The darker the colour the more your husband   loves you!”We at Mehndi Creations, specialise in making top quality, fresh, natural   mehndi paste to guarantee the rich bridal colour it will give to all   brides.Excessive washing and lotions may affect the colour of the mehndi.</p></li>
                        <li><p>Once mehndi is applied on the skin, it may be left overnight or left on for   at-least 4 hours to enhance the deepness in colour.</p></li>
                        <li><p>The mehndi can be scraped of with a payment card or an unsharp   butter knife.</p></li>
                        <li><p>The mehndi on the skin should not be covered with a plastic bag or   gloves as it will result in condensation from sweating and therefore   loose the definition in design.</p></li>
                        <li><p>Lemon Juice &amp; sugar syrup can be applied with cotton wool on to the   mehndi once it is dried. This will secure the mehndi onto the skin more   and therefore, result in the darkness of the colour on the skin.   Application may be repeated, if mehndi feels dry and hard.</p></li>
                        <li><p>The colour on the skin will darken on the day after the mehndi has been   applied. The darkness in colour will last for a few days and will fade   away.</p></li>
                        <li><p>The mehndi powder can be a khaki, green or dark brown colour   depending on where it comes from. It usually develops into a chocolate   brown colour when applied as a paste onto the skin. Fresh mehndi   powder will produce a strong dark brown colour and will last longer.   Stale mehndi will produce a light orange colour, which will not get   darker over time.</p></li>
                        <li><p>The use of black “henna” should be avoided as it contains a dangerous   chemical called Para-phenylenediamine (PPD) found in hair dyes which   causes skin irritations.</p></li>
                        <li><p>Brides should have manicures, pedicures &amp; waxing done before mehndi   is applied on them as otherwise the mehndi will be waxed off with the   hair!</p></li>
                        <li><p>To beautify your mehndi for mehndi nights, wedding or receptions, body   glitter and gems in different colours can be applied on the skin to match   the outfits. Mehndi Creations specializes in all types of glitter work</p></li>
                        <li><p>Never wash the mehndi on the same day as application.</p></li>
                        <li><p>Avoid getting mehndi done too late at night as you'll need enough time to leave it on your skin for a great result.</p></li>
                    </ul>

                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        getHome: () => dispatch(userActions.getHome()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMehndi);