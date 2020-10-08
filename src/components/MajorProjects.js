import React, { Component } from "react";
import MajorProjectTemplate from "./MajorProjectTemplate";
import "./MajorProjects.css";

import glass from "../res/hd/glass.png";
import cascade from "../res/hd/cascade.png";

export default class MajorProjects extends Component {
  render() {
    return (
      <div id="MPContainer">
        <MajorProjectTemplate
          name="Cascade"
          image={cascade}
          gpLink="https://play.google.com/store/apps/details?id=anton25360.github.com.cascade2"
          info="Cascade was my first foray into software development, and one of my
          most treasured projects to date. The app uses notifications,
          cloud-based reminders (Cloud Firestore), & account creation for
          cross-platform saving (Handled by Firebase). Google's developer
          tools (Firebase) have been fully implemented, allowing for database
          storage, account management, remote crashing reports, usage
          statistics, A/B Testing, and more."
        />
      </div>
    );
  }
}
