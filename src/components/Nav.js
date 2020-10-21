
import React from 'react';
import { connect } from 'react-redux';

import "../styles/scss/style.scss";
import logo from '../resources/logo/l2.png';
import whatsapp from '../resources/icons/whatsapp.svg';
import phone from '../resources/icons/phone.svg';

import jQuery from 'jquery'


(function ($) {
    $(function () {
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        $('#nav-toggle').click(function () {
            $('nav ul').slideToggle();
        });
        $('#nav-toggle').on('hover', function () {
            this.classList.toggle('active');
        });
    });
})(jQuery);

class MainNav extends React.PureComponent {

    render() {
        return (
            <>
                <div id='nav-top'>
                    <a href="tel:+919600234795">
                        <button><img src={phone} width='30px' alt='phone number' /> +91 - 9600234795</button>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+919600234795" rel="noopener noreferrer" target="_blank">
                        <button><img src={whatsapp} width='30px' alt='whatsapp' /> WHATSAPP ME</button>
                    </a>
                </div>

                <main className="navigation">
                    <div className="nav-container">
                        <div className="brand">
                            <a href="/"><img id='logo' src={logo} alt='logo' /></a>
                        </div>
                        <nav>
                            <div className="nav-mobile"><span id="nav-toggle">MENU<span></span></span></div>
                            <ul className="nav-list">
                                <li>
                                    <a href="/">
                                        <button className="dropbtn">HOME <span id='count'>{this.props.cart_count}</span></button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/gallery">
                                        <button className="dropbtn">GALLERY <span id='count'>{this.props.cart_count}</span></button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/services">
                                        <button className="dropbtn">SERVICES <span id='count'>{this.props.cart_count}</span></button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/about/me">
                                        <button className="dropbtn">ABOUT ME <span id='count'>{this.props.cart_count}</span></button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/about/mehndi">
                                        <button className="dropbtn">ABOUT MEHNDI <span id='count'>{this.props.cart_count}</span></button>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </main>

            </>)
    }
}

const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps)(MainNav);
