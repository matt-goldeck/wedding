import React, { Component } from "react";
import "./Registry.css";
 
class Registry extends Component {
  render() {
    return (
      <div>
        <h2>Registry</h2>
            <a href="https://www.myregistry.com/rei/wedding-registry/matt-goldeck-and-nicole-hindley-gloucester-township-nj/3380458">
              <div className='registry-button'>🏕</div>
            </a>
            <a href="https://www.target.com/gift-registry/gift/nicole-and-matt2022">
              <div className='registry-button'>🎯</div>
            </a>
      </div>
    );
  }
}
 
export default Registry;