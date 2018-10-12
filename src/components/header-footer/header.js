import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div className="header__navigationWrapper">
                <div className="header__leftColumn">
                    <div className="logo">
                        <img src="../" alt="Logo"/>
                    </div>
                </div>

                
                <div className="header__rightColumn">
                    <div className="header__linksWrapper">
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
                </div>
            </div>
        )
    }
}
export default Header;