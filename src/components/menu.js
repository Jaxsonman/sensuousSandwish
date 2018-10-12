import React, { Component } from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';
import Parallax from './parallax';

class Menu extends Component {
    render() {
        return(
            <div>
                <Header />
                <Parallax />
                <MenuItems />
                <Footer />
            </div>
        )
    }
}
export default Menu;