import React, { Component } from "react";
import './Travel.css';
 
class Travel extends Component {
  render() {
    return (
      <div className='travel-wrapper'>
        <div>
          <h2>Venue</h2>
          <p>Our reception is hosted at The Factory, a 1920's movie theater originally operated by <a href="https://en.wikipedia.org/wiki/Michael_Landon">the Landon family</a>. It's since been converted into a maker-space by <a href="https://www.instagram.com/factoryworker13/?hl=en">a dude named Tom</a>.</p>
          <p>The original box-office and facade is located on Haddon Ave, but the venue is now only accesible via the entrance on <b>Fern Avenue</b> through the Endgrain Coffee Outpost.</p>
          <p>---</p>
          <h3>Location</h3>
          <p>The Factory is located in the center of Downtown Collingswood directly across Haddon Ave from the Collingswood PATCO station.</p>
          <div className='map-wrapper'>
            <iframe
              loading="lazy"
              title='The Factory'
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJKZVsXVfJxokR3IbMWhsL89I&key=AIzaSyBt-ca4LkWlBrF1yOGvQAPPtnulpy6sdTc"/>
          </div>
          <p>---</p>
          <h3>Getting There</h3>
          <p>Collingswood is easily accesible via car by I-295, RT 70, RT 130, or RT 30. Just use your GPS, silly.</p>
          <p>Alternatively, you can take PATCO directly from Philadelphia to Collingswood Station.</p>
          <p>---</p>
          <h3>Parking</h3>
          <p>The Factory <b>does not have onsite parking</b> -- but free parking is located nearby at either the Collingswood PATCO parking lot or the public parking lot on N. Atlantic Ave.</p>
          <iframe 
            loading="lazy"
            title='Patco Parking Lot'
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ4XiE_VbJxokR4Nrea00otPQ&key=AIzaSyBt-ca4LkWlBrF1yOGvQAPPtnulpy6sdTc"
          />
          <p>More information about parking in Collingswood is <a href="http://www.collingswood.com/things_to_do/getting_here_parking/index.php">available here.</a></p>
        </div>
        <p>---</p>
        <div>
          <h2>Lodging</h2>
          <p>🍒 <i>Cherry Hill</i> 🍒</p>
          <p><a href="https://www.hilton.com/en/hotels/phlchdt-doubletree-cherry-hill-philadelphia/">The DoubleTree by Hilton Cherry Hill Philadelphia</a> is only 5 minutes away.</p>
          <iframe 
            loading="lazy"
            title='Hilton Hotel'
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJW_rgl8LLxokRsnMFNYSDcm8&key=AIzaSyBt-ca4LkWlBrF1yOGvQAPPtnulpy6sdTc"
          />
          <p>🌲 <i>Voorhees</i> 🌲</p>
          <div className='ul-wrapper'>
              <p><a href="https://www.marriott.com/en-us/hotels/phlvo-springhill-suites-voorhees-mt-laurel-cherry-hill/overview/">Springhill Mariott Suites</a></p>
              <p><a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/voorhees/llyvh/hoteldetail">Holiday Inn Express Voorhees - Mt Laurel</a></p>
          </div>
          <p>🏔 <i>Mount Laurel</i> 🏔</p>
          <div className='ul-wrapper'>
              <p><a href="https://www.marriott.com/en-us/hotels/phlal-aloft-mount-laurel/overview/">aLoft - Mount Laurel</a></p>
              <p><a href="https://www.marriott.com/en-us/hotels/phlml-courtyard-mt-laurel-cherry-hill/overview/">Courtyard Mount Laurel - Cherry Hill</a></p>
              <p><a href="https://www.marriott.com/en-us/hotels/phlmw-the-westin-mount-laurel/overview/">The Westin Mount Laurel</a></p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Travel;