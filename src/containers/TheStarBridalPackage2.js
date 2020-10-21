
import React, { Component } from 'react';

import { connect } from 'react-redux';

import MainNav from '../components/Nav';

import r1 from '../resources/images/r1.jpeg';
import r2 from '../resources/images/r2.jpeg';
import r3 from '../resources/images/r3.jpeg';
import r4 from '../resources/images/r4.jpeg';
import r5 from '../resources/images/r5.jpeg';
import r6 from '../resources/images/r6.jpeg';
import r7 from '../resources/images/r7.jpeg';

class TheStarBridalPackage2 extends Component {

    render() {
        return (
            <main>
                <MainNav />
                <div id="classic-bridal-package">
                    <div class="dropdown">
                        <button class="button">OTHER PACKEGES</button>
                        <div class="dropdown-content">
                            <a href="/packages/classic-bridal">Classic Bridal Package</a>
                            <a href="/packages/elegant-bridal">Elegant Bridal Package</a>
                            <a href="/packages/royal-bridal">Royal Bridal Package</a>
                            <a href="/packages/star-bridal-1">Star Bridal Package 1</a>
                            <a href="/packages/star-bridal-2">Star Bridal Package 2</a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href={r1} target='_blank' rel="noopener noreferrer"><img src={r1} alt='classic-bridal-package-1' /></a>
                            <a href={r2} target='_blank' rel="noopener noreferrer"><img src={r2} alt='classic-bridal-package-2' /></a>
                            <a href={r3} target='_blank' rel="noopener noreferrer"><img src={r3} alt='classic-bridal-package-3' /></a>
                            <a href={r4} target='_blank' rel="noopener noreferrer"><img src={r4} alt='classic-bridal-package-4' /></a>
                            <a href={r5} target='_blank' rel="noopener noreferrer"><img src={r5} alt='classic-bridal-package-5' /></a>
                        </div>
                        <div>
                            <a href={r6} target='_blank' rel="noopener noreferrer"><img src={r6} alt='classic-bridal-package-main-1' /></a>
                            <a href={r7} target='_blank' rel="noopener noreferrer"><img src={r7} alt='classic-bridal-package-main-2' /></a>
                        </div>
                    </div>
                    <div>
                        <h1>Star Bridal Package 2</h1>
                        <p>For the creative bride seeking the traditional intricate look with figurines. The Bridal Package includes a bespoke design with more emphasis on the detail and fuller coverage on the palms and arms, with complimented design on the backs and feet. Figure work (Bride & Groom faces, Raja & Rani, Ganesh, narrative, etc) can also be incorporated into the design. It also includes intricate designs with fine lines, leaves, circles, leaves, peacocks, paisleys, flowers, lace, auspicious and religious symbols. These designs usually cover the entire hands and feet.</p>
                        <p>Bespoke and unique bridal designs created especially for you - quote available upon request. Please fill in the Contact Us form.</p>
                    </div>
                    <br />
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(TheStarBridalPackage2);