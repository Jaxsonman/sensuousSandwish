import React, { Component } from 'react';

class Parallax extends Component {
    render() {
        return (
            <div className="parallax">
                <div className="parallax__image">
                    <img src="" alt="Parallax Image"></img>
                    <div className="parallax__text">
                        <h3>some parallax text</h3>
                    </div>
                </div>
            </div>
        )
    }
}
export default Parallax;