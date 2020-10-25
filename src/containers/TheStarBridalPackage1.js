
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as userActions from '../store/actions/actions';
import { BASE_URL } from '../store/actions/ActionTypes';

import MainNav from '../components/Nav';
import Footer from '../components/Footer';
import ContactPopUp from '../components/ContactPopUp';

import { Spinner } from 'reactstrap';


class TheStarBridalPackage1 extends Component {

    componentDidMount() {
        this.props.getPackageImages('sb1')
    }

    render() {
        return (
            <main>
                <MainNav />
                <div id="classic-bridal-package">
                    <div className="bridal-links">
                        <a href="/packages/classic-bridal/?name=cb">Classic Bridal Package</a>
                        <a href="/packages/elegant-bridal/?name=eb">Elegant Bridal Package</a>
                        <a href="/packages/royal-bridal/?name=rb">Royal Bridal Package</a>
                        <a href="/packages/star-bridal-1/?name=sb1">Star Bridal Package 1</a>
                        <a href="/packages/star-bridal-2/?name=sb2">Star Bridal Package 2</a>
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
                        <h1>Star Bridal Package 1</h1>
                        <p>For the creative bride seeking the Traditional intricate look.  This includes the Elegant Bridal Package, but with more emphasis on the detail and fuller coverage on the palms.</p>
                        <p>The Traditional designs are intricate designs with fine lines, leaves, peacocks, paisleys, flowers, lace, auspicious and religious symbols.  These designs usually cover the entire hands and feet.  Figure work (bride & groom faces or a narrative) can also be incorporated into the design on the palms.  Due to religious reasons, for Muslim brides, any animal motifs, bird motifs and human faces are avoided in the designs.</p>
                        <p>Bespoke &amp; unique bridal designs created especially for you - quote available upon request. Please fill in the Contact Us form.</p>
                    </div>
                    <br />
                </div>
                <Footer />
                <ContactPopUp />
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

export default connect(mapStateToProps, mapDispatchToProps)(TheStarBridalPackage1);