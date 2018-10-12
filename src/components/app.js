import React, { Component } from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';
// import Parallax from './parallax';
import Description from './description';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <img src="C:\Users\jaxbl\OneDrive\Desktop\Bottega\PersonalProjects\sensuousSandwich2\sensuousSandwish\static\assets\images\paralax.jpg"/>
        {/* <Parallax/> */}
        {/* <Description/>
        <Footer/> */}
      </div>
    );
  }
}
