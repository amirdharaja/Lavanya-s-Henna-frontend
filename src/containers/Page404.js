
import React, { Component } from 'react';

import MainNav from '../components/Nav';
import Footer from '../components/Footer';
import ContactPopUp from '../components/ContactPopUp';

import page404 from '../resources/icons/page404.svg';




class Page404 extends Component {

    render() {
        return (
            <main>
                <MainNav />
                <img id='page404' src={page404} alt='page404' />
                <Footer />
                <ContactPopUp />
            </main>
        );
    }
}


export default Page404;