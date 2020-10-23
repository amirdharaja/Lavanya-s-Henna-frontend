
import React, { Component } from 'react';

import MainNav from '../components/Nav';

import r9 from '../resources/images/r9.jpg';



class Tips extends Component {

    render() {
        return (
            <main>
                <MainNav />
                <div className="about-me">
                    <img src={r9} alt='mehndi-tips' />
                    <h1>MEHNDI TIPS</h1>
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

export default Tips;