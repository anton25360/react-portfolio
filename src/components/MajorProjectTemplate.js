import React, { Component } from "react";
import "./MajorProjectTemplate.css";

export default class MajorProjectTemplate extends Component {
  render() {
    return (
      <div id="MPTContainer">
        <img id="MPTImage" src={this.props.image} />
        <div id="MPTTextContainer">
          <h1 id="MPTTitle" className={this.props.name}>
            {this.props.name}
          </h1>
          <p id="MPTInfo">{this.props.info}</p>
          <a href={this.props.gpLink}>
            <img
              id="MPTButton"
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png"
            />
          </a>
        </div>
      </div>
    );
  }
}
