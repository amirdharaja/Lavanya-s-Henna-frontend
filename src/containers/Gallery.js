
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as userActions from '../store/actions/actions';
import { BASE_URL } from '../store/actions/ActionTypes';

import MainNav from '../components/Nav';
import Footer from '../components/Footer';
import ContactPopUp from '../components/ContactPopUp';

import { Spinner } from 'reactstrap';


class Gallery extends Component {

    componentDidMount() {
        this.props.getGallery()
    }

    sort = (event) => {
        this.props.getGallery(event.target.value)
    }

    render() {
        return (
            <main>
                <MainNav />
                <div className="gallery">
                    <h1>GALLERY</h1>
                    <div>
                        <button onClick={this.sort} value='a'>ALL</button>
                        <button onClick={this.sort} value='h'>HANDS</button>
                        <button onClick={this.sort} value='f'>FOOTS</button>
                        <button onClick={this.sort} value='o'>OTHERS</button>
                    </div>
                    <div>
                        {this.props.isLoading ?
                            <div id='spnner'>
                                <Spinner id='spin' style={{ width: '3rem', height: '3rem' }} />
                            </div>
                            :
                            <div>
                                {this.props.gallery.length === 0
                                    ?
                                    <p id='no-data'>No Image Found</p>
                                    :
                                    <>
                                        {this.props.gallery.map(function (image, index) {
                                            return <a key={index} href={BASE_URL + image.image} rel="noopener noreferrer" target="_blank"><img id='gallery-image' key={index} alt={'gallery' + index} src={BASE_URL + image.image} /></a>
                                        })}
                                    </>
                                }

                            </div>
                        }
                    </div>
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
        getGallery: (sort_by) => dispatch(userActions.getGallery(sort_by)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);