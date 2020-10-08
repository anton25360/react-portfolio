import React, { Component } from "react";
import MajorProjectTemplate from "./MajorProjectTemplate";
import "./MajorProjects.css";

import glass from "../res/hd/glass.png";
import cascade from "../res/hd/cascade.png";

export default class MajorProjects extends Component {
  render() {
    return (

      <div id="MPContainer">
        <h1 id="MPTitle">Apps & Projects</h1>
        {/* <p id="gallerySubtitle">
          The Projects Gallery is meant to showcase all my smaller projects that
          aren't massivly complex but are still worthy of being part of my
          portfolio, as well as my language diversity.
        </p> */}

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
        <h1 className='MPTDivider'>...</h1>
        <MajorProjectTemplate
          name="Glass"
          image={glass}
          gpLink="https://play.google.com/store/apps/details?id=anton25360.github.com.cascade2"
          info="My first fully fledged React Native app. Glass uses an API to get data of a user-requested cocktail, and displays the ingredients, instructions, and an image in a  beautiful and intuitive UI. Cocktails can also be added to Favourites so they can be quickly previewed from the Favourites Tab. Uses AsyncStorage for persistent data storage and React state for fast and instant loading & previewing. Supports system Dark Mode."
        />
      </div>
    );
  }
}
