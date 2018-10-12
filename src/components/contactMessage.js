import React, { Component } from 'react';

class ContactMessage extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="contact-grid-wrapper">
          <div className="company-metadata-sidebar-wrapper">
            <div className="logo">
              <img src="" alt="logo" />
            </div>
            <div className="company-details-wrapper">
              <i className="fas fa-location-arrow"></i>

                <div> street address </div>
                <div>City, State</div>

              <div className="company-details-wrapper">
                <i className="fas fa-mobile"></i>

                <div>Phone Number</div>
              
              </div>
              <div className="company-details-wrapper">
                <i className="fas fa-clock"></i>
                <div>Hours</div>
              </div>
            </div>


            <div className="form">

                <div className="form-group">
                  <input type="text" id="fullName" placeholder="Your Name"/>
                    <label className="fullName">Your Name</label>
                </div>

                <div className="form-group">
                  <input type="email" id="yourEmail" placeholder="Your Email"/>
                    <label className="yourEmail">Your Email</label>
                </div>

                <div className="form-group">
                  <textarea name="message" id="message" placeholder="Message"></textarea>
                  <label className="message">Message</label>
                </div>
            </div>

            <div className="centered-btn-wrapper">
              <button type="submit" className="btn">Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMessage;