
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as userActions from '../store/actions/actions';
import {BASE_URL} from '../store/actions/ActionTypes';

import MainNav from '../components/Nav';

import { Spinner} from 'reactstrap';
  

class Gallery extends Component {

    componentDidMount() {
        this.props.getGallery()
    }

    render() {
        return (
            <main>
                <MainNav />
                <div  className="gallery">
                <h1>GALLERY</h1>
                <div>
                    <button>ALL</button>
                    <button>HANDS</button>
                    <button>FOOT</button>
                    <button>OTHER</button>
                </div>
                <div>
                {this.props.isLoading ?
                    <div id='spnner'>
                        <Spinner id='spin' style={{ width: '3rem', height: '3rem' }} />
                    </div>
                    :
                    <div>
                        {this.props.gallery.map(function (image, index) {
                            return <img id='gallery-image' key={index} alt={'gallery' + index}src={BASE_URL + image.image} />
                        })}
                    </div>
                }
                </div>
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
      getGallery: () => dispatch(userActions.getGallery()),
    }
  }
  
  export default  connect(mapStateToProps, mapDispatchToProps)(Gallery);