
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as userActions from '../store/actions/actions';

import MainNav from '../components/Nav';
import HomeCarousel from '../components/HomeCarousel';
import Welcome from '../components/Welcome';
import PageImage from '../components/PageImage';


class Home extends Component {

    componentDidMount() {
        this.props.getHome()
    }

    render() {
        return (
            <div className="Home">
                <MainNav />
                <HomeCarousel
                    main_slide_images={this.props.main_slide_images}
                />
                <div id='main-heading'>
                <h2>Committed to making your special occasion a <strong>memorable one</strong></h2>
                <h1>Welcome to Lavanya's Henna</h1>
                </div>
                <Welcome />
                <PageImage />
            </div>
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
  
  export default  connect(mapStateToProps, mapDispatchToProps)(Home);