import React, { Component } from "react";
import './About.css';

class About extends Component {
  render() {
    return (
      <div className='about-wrapper'>
        <h2>Welcome!</h2>
        <p>Nicole and Matt will be privately eloping at the Von Trapp Family Lodge in the Green Mountains of Vermont on October 24th, 2022.</p>
        <p>They are thrilled to invite you to the following reception and celebration of their love on November 5th, 2022 at The Factory in Collingswood, New Jersey.</p>
        <p>---</p>
        <div className='about-detail'>
            <b>-- When --</b>
            <div className='about-detail-sub'>
              <p>November 5th 2022 at 6 PM</p>
            </div>
            <b>-- Where --</b>
            <div className='about-detail-sub'>
              <p>The Factory</p>
              <p>13 Fern Ave, Collingswood, NJ 08108</p>
            </div>
            <b>-- RSVP By --</b>
            <div className='about-detail-sub'>
              <p>October 1st, 2022</p>
            </div>
            <b>-- Dress --</b>
            <div className='about-detail-sub'>
              <p>Cocktail Casual</p>
            </div>
            <b>-- Food --</b>
            <div className='about-detail-sub'>
              <p>Decent</p>
            </div>
            <p>---</p>
        </div>
      </div>
    );
  }
}
 
export default About;