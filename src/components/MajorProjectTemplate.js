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
            Cascade was my first foray into software development, and one of my
            most treasured projects to date. The app uses notifications,
            cloud-based reminders (Cloud Firestore), & account creation for
            cross-platform saving (Handled by Firebase). Google's developer
            tools (Firebase) have been fully implemented, allowing for database
            storage, account management, remote crashing reports, usage
            statistics, A/B Testing, and more.
          </p>
          <a href="https://play.google.com/store/apps/details?id=anton25360.github.com.cascade2">
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
