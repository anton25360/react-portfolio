import React, { Component } from "react";
import MajorProjectTemplate from "./MajorProjectTemplate";
import {Link} from 'react-router-dom'
import "./MajorProjects.css";

import glass from "../res/hd/glass.png";
import cascade from "../res/hd/cascade.png";
import synergy from "../res/hd/synergyOS.png";

export default class MajorProjects extends Component {
  render() {
    return (
      <div className="MPContainer">
        <h1 id="MPTitle">Apps & Projects</h1>

        <MajorProjectTemplate
          name="Cascade"
          type ='mobile'
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
        <h1 className="MPTDivider">...</h1>
        <MajorProjectTemplate
          name="Glass"
          type ='mobile'
          image={glass}
          customClass='hideGPButton' //use for custom CSS
          linkText='Coming soon to Android and iOS' //use link text for apps!!
          gpLink={null}
          info="My first fully fledged React Native app. Glass uses an API to get data of a user-requested cocktail, and displays the ingredients, instructions, and an image in a  beautiful and intuitive UI. Cocktails can also be added to Favourites so they can be quickly previewed from the Favourites Tab. Uses AsyncStorage for persistent data storage and React state for fast and instant loading & previewing. Supports system Dark Mode. "
        />
        <h1 className="MPTDivider">...</h1>
        <MajorProjectTemplate
          name="SynergyOS"
          type ='desktop'
          image={synergy}
          gpLink="https://synergyos.now.sh/"
          linkText='Click here for Demo' //use link text for apps!!
          customClass='hideGPButton' //use for custom CSS
          info="Collaborative project. SynergyOS is a realistic browser-based OS built entirely in React. Includes a plethora of apps(office suite, calculator, NES Emulator), resizeable windows, a theme engine, custom icons, a startup animation, and more! "
        />
        <h1 className="MPTDivider">...</h1>
        <p id='MPSubtitle'><span style={{fontSize: '25px'}}>Looking for more?</span><br/> Check out the <Link id='aboutLink' to="/gallery">Projects Gallery</Link> for all my other projects, or visit my <a id='aboutLink' href='https://github.com/anton25360'>Github</a>.</p>
      </div>
    );
  }
}
