import React, { Component } from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';
import Parallax from './parallax';
import Description from './description';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        {/* <Header/>
        <Parallax/>
        <Description/> */}
        <Footer/>
      </div>
    );
  }
}
