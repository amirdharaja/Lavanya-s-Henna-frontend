
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as userActions from '../store/actions/actions';

import MainNav from '../components/Nav';

import lavanya from '../resources/images/lavanya.jpeg';



class AboutMe extends Component {

    render() {
        return (
            <main>
                <MainNav />
                <div className="about-me">
                    <img src={lavanya} alt='lavanya' />
                    <h1>About Me</h1>
                    <p>My name is Lavanya Muthurayappan, and for over last two and half decades I have been adorning brides and inspiring artists with my mehndi designs. A social worker by profession I have always had a very special relationship with doing henna / mehndi. I am a self-taught henna artist practicing this art for the last 5 years and have always been committed to providing artistic, professional services and making my clients experience with henna/mehndi a unique, enjoyable and an unforgettable one.</p>
                    <p>My henna paste is made with 100% natural Henna powder, lemon juice, and essential oils. I do not use “Black henna” because I believe it is unethical and dangerous.</p>
                    <p>I can do Mehndi / Henna for just about any occasion. I Specialize in Bridal Mehndi, Sangeet Parties, Engagements, Baby Showers, Birthday Parties, Ladies Night outs, School Events, Corporate Events and Fundraisers. I love to extend this art form onto cakes and other mediums like wood, glass and candles.</p>
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
        getHome: () => dispatch(userActions.getHome()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);