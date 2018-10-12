import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';


class Parallax extends Component {
    render() {
        return(
            <div className="parallax__wrapper">
                <img className="parallax" src="/assets/images/paralax.png" />
            </div>
        )
    }
}
export default Parallax;