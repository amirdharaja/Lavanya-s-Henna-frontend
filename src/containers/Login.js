
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as userActions from '../store/actions/actions';

import MainNav from '../components/Nav';
import HomeCarousel from '../components/HomeCarousel';


class Login extends Component {

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
                <h1 id='main-heading'>Login Committed to making your special occasion a memorable one</h1>
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
  
  export default  connect(mapStateToProps, mapDispatchToProps)(Login);