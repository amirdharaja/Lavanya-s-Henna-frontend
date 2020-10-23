
import React, { Component } from 'react';

import MainNav from '../components/Nav';


class Services extends Component {

    render() {
        return (
            <main>
                <MainNav />
                <div className="services-page">
                    <h1>SERVICES</h1>
                    <h2>What I Do</h2>
                    <h3>_</h3>
                    <h4>Committed to making your special occasion a memorable one...</h4>
                    <div>
                        <div>
                            <h1>Bridal Mehndi</h1>
                            <p>A whole range of bridal design options available, from simple to intricate with heavy details, from traditional Indian to Arabic. Packages depend on the style and length of the mehendi on arms and legs.</p>
                        </div>
                        <div>
                            <h1>Sangeet Parties</h1>
                            <p>Whether it is mehndi or sangeet night, kick off the wedding festivities with mehndi fun. The pricing is based on an hourly rate and not on a per hand rate.</p>
                        </div>
                        <div>
                            <h1>Engagements</h1>
                            <p>Adorn your beautiful hands for the first wedding festivity with some mehndi.</p>
                        </div>
                        <div>
                            <h1>Baby / Bridal Showers</h1>
                            <p>Whether it’s belly mehndi or mehndi for your guests at your shower, it’s sure to be a hit.</p>
                        </div>
                        <div>
                            <h1>Birthday Parties</h1>
                            <p>Who says mehndi is just for weddings, bring the joy of color to any event.</p>
                        </div>
                        <div>
                            <h1>School / Corporate Events</h1>
                            <p>Mehndi is always a super hit at all school and corporate functions.</p>
                        </div>
                        <div>
                            <h1>Bar / Bat Mitzvah</h1>
                            <p>Mehndi is fun for all kids and adults a like, ring in the teen hood with a hit Bar/Bat Mitzvah.</p>
                        </div>
                        <div>
                            <h1>Grad Night</h1>
                            <p>The new graduates really enjoy this and the henna artist is busy at this event all night.</p>
                        </div>
                        <div>
                            <h1>Girls Night Out</h1>
                            <p>A fun way to bond with your girlfriends. Go with a non-traditional mehndi design, maybe something on the back or shoulder.</p>
                        </div>
                    </div>

                </div>
            </main>
        );
    }
}

export default Services;