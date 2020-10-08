import React, { Component } from "react";
import "./MajorProjectTemplate.css";

import glass from "../res/hd/glass.png";
import cascade from "../res/hd/cascade.png";

export default class MajorProjectTemplate extends Component {
  render() {
    return (
      <div id="MPTContainer">
        {/* {this.props.namee} */}
        <img id="MPTImage" src={cascade} />
        <div id="MPTTextContainer">
          <h1 id="MPTTitle">Cascade</h1>
          <p id="MPTInfo">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <button id="MPTButton">click me</button>
          <a href="https://play.google.com/store/apps/details?id=anton25360.github.com.cascade2&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png"
            />
          </a>
        </div>
      </div>
    );
  }
}
