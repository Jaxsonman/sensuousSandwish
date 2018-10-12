import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div className="header__navigationWrapper">
                <div className="header__leftColumn">
                    <div className="logo">
                        <img src="../" alt="Logo" />
                    </div>
                </div>

                
                <div className="header__rightColumn">
                    <div className="header__linksWrapper">
                        <div className="nav-link">
                            <div>
                                Home
                            </div>
                        </div>
                        <div className="nav-link">
                            <div>
                                Menu
                            </div>
                        </div>
                        <div className="nav-link">
                            <div>
                                Contact
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;