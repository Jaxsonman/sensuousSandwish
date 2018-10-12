import React, { Component } from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';
import ContactMessage from './contactMessage';
import Map from './map';

class Contact extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Map/>
                <ContactMessage/>
                <Map/>
                <ContactMessage/>
                <Footer/>
            </div>
        )
    }
}
export default Contact;