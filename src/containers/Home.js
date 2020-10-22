
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
            <main>
                <MainNav />
                <HomeCarousel main_slide_images={this.props.main_slide_images} />
                <div id='home'>
                    <h2>Committed to making your special occasion <strong>a memorable one</strong></h2>
                    <h1><strong>W</strong>elcome to <strong>L</strong>avanya<strong>'</strong>s <strong>H</strong>enna</h1>
                </div>
                <Welcome />
                <PageImage />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);