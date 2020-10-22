
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as userActions from '../store/actions/actions';
import { BASE_URL } from '../store/actions/ActionTypes';

import MainNav from '../components/Nav';

import { Spinner } from 'reactstrap';


class TheRoyalBridalPackage extends Component {

    componentDidMount() {
        this.props.getPackageImages('rb')
    }

    render() {
        return (
            <main>
                <MainNav />
                <div id="classic-bridal-package">
                    <div className="dropdown">
                        <button>OTHER PACKEGES</button>
                        <div className="dropdown-content">
                            <a href="/packages/classic-bridal/?name=cb">Classic Bridal Package</a>
                            <a href="/packages/elegant-bridal/?name=eb">Elegant Bridal Package</a>
                            <a href="/packages/royal-bridal/?name=rb">Royal Bridal Package</a>
                            <a href="/packages/star-bridal-1/?name=sb1">Star Bridal Package 1</a>
                            <a href="/packages/star-bridal-2/?name=sb2">Star Bridal Package 2</a>
                        </div>
                    </div>
                    <div>
                        {this.props.isLoading
                            ?
                            <div id='spnner'>
                                <Spinner id='spin' style={{ width: '3rem', height: '3rem' }} />
                            </div>
                            :
                            <div>
                                {this.props.bridal_package_images.map(function (image, index) {
                                    return <a key={index} href={BASE_URL + image.image} rel="noopener noreferrer" target="_blank"><img id='gallery-image' key={index} alt={'package' + index} src={BASE_URL + image.image} /></a>
                                })}
                            </div>
                        }
                    </div>
                    <div>
                        <h1>Royal Bridal Package</h1>
                        <p>For the Royal Bride seeking the Traditional look.</p>
                        <p>Includes:</p>
                        <ul>
                            <li><p>The Star Bridal Package with detailed mehndi entirely covering the palms extending to the elbows.</p></li>
                            <li><p>Complimentary sparkle of gems and glitter to match your mehndi night outfit.</p></li>
                            <li><p>Complimentary mehndi strips for 2 of your bridesmaids.</p></li>
                            <li><p>One hour unlimited mehndi strips/tattoos for your guests at the mehndi night.</p></li>
                        </ul>
                        <p>The Traditional designs are intricate designs with fine lines, leaves, peacocks, paisleys, flowers, lace, auspicious and religious symbols.  These designs usually cover the entire hands and feet.  Figure work (bride & groom faces or a narrative) can also be incorporated into the design on the palms.</p>
                        <p>Bespoke &amp; unique bridal designs created especially for you - quote available upon request. Please fill in the Contact Us form</p>
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

const mapDispatchToProps = dispatch => {
    return {
        getPackageImages: (name) => dispatch(userActions.getPackageImages(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheRoyalBridalPackage);