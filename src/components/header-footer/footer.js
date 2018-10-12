import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__logo">
                        <img src="/assets/images/Logo.png" alt="Logo" />
                </div>


                <div className="footer__links">
                    <div className="nav-link">
                        <Link to="/">Home</Link>
                    </div>

                    <div className="nav-link">
                        <Link to="/menu">Menu</Link>
                    </div>

                    <div className="nav-link">
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="footer__social">
                    <i className="footer__social__insta fab fa-instagram"></i>
                    <i className="footer__social__facebook fab fa-facebook"></i>
                    <i className="footer__social__twitter fab fa-twitter"></i>
                </div>
            </div>

        )
    }
}
export default Footer;