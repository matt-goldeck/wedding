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
import Registry from "./registry/Registry";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      submitted: false,
      answer: null,
    };

    this.setSubmit = this.setSubmit.bind(this);
  }

  setSubmit(answer) {
    // track state so user can't RSVP again
    this.setState({
      submitted: true,
      answer: answer
    });
  }

  render() {
    return (
      <HashRouter>
        <div style={{display:'none'}}>
          hi computer friends
        </div>
        <div>
          <div className="header-container">
              <div className="header-img pickgradient">
                  <img alt='Matt and Nicole at the Trevi fountain' src="images/couple_11.png"/>
                  <div className="header-img-text">
                      <h1>Nicole & Matt</h1>
                      <p>November 5th, 2022</p>
                      <p>The Factory, Collingswood New Jersey</p>
                  </div>
              </div>
              
              <ul className="navbar">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/rsvp">RSVP</NavLink></li>
                  <li><NavLink to="/travel">Travel & Lodging</NavLink></li>
                  <li><NavLink to="/registry">Registry</NavLink></li>
              </ul>
          </div>
          
          <div className="content">
              <Routes>
                  <Route exact path="/" element={<About/>}/>
                  <Route exact path="/travel" element={<Travel/>}/>
                  <Route exact path="/rsvp" element={
                    <RSVP
                      submitted={this.state.submitted}
                      answer={this.state.answer}
                      setSubmit={this.setSubmit}
                    />}
                  />
                  <Route exact path="/registry" element={<Registry/>}/>
              </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
  }
 
export default Main;