import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from "./about/About";
import RSVP from "./rsvp/RSVP";
import Travel from "./travel/Travel";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <div className="header-container">
                <div className="header-img pickgradient">
                    <img src="images/couple_11.png"/>
                    <div className="header-img-text">
                        <h1>Nicole & Matt</h1>
                        <p>November 5th, 2022</p>
                        <p>The Factory, Collingswood New Jersey</p>
                    </div>
                </div>
                
                <ul className="navbar">
                    <li><NavLink to="/">About</NavLink></li>
                    <li><NavLink to="/travel">Travel and Accommodations</NavLink></li>
                    <li><NavLink to="/rsvp">RSVP</NavLink></li>
                </ul>
            </div>
            
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<About/>}/>
                    <Route exact path="/travel" element={<Travel/>}/>
                    <Route exact path="/rsvp" element={<RSVP/>}/>
                </Routes>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;