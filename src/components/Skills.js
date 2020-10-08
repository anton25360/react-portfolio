import React, { Component } from "react";
import "./Skills.css";

export class Skills extends Component {
  render() {
    return (
      <div className="skillsContainer">
        <div id="skillsTitleContainer">
          <h1 className="skillsTitle">Skills</h1>
        </div>
        <div className="skillsText">
          <p className="skillsIndicator">Languages</p>
          <p className="badgeFormat badge-html">HTML</p>
          <p className="badgeFormat badge-css">CSS</p>
          <p className="badgeFormat badge-js">JavaScript</p>
          <p className="badgeFormat badge-ts">TypeScript</p>
          <p className="badgeFormat badge-java">Java</p>
          <p className="badgeFormat badge-php">PHP</p>
          <p className="badgeFormat badge-python">Python</p>

          <br />
          <br />

          <p className="skillsIndicator">Frameworks</p>
          <p className="badgeFormat badge-node">NodeJS</p>
          <p className="badgeFormat badge-react">React</p>
          <p className="badgeFormat badge-react">React Native</p>
          <p className="badgeFormat badge-bootstrap">Bootstrap</p>
          <p className="badgeFormat badge-angular">Angular</p>
          <p className="badgeFormat badge-vue">Vue</p>

          <br />
          <br />

          <p className="skillsIndicator">Tools</p>
          <p className="badgeFormat badge-git">git / CLI</p>
          <p className="badgeFormat badge-pwa">PWA</p>
          <p className="badgeFormat badge-api">API</p>
          <p className="badgeFormat badge-firebase">Firebase</p>
          <p className="badgeFormat badge-sass">Prettier</p>
          <p className="badgeFormat badge-studio">Android Studio</p>
          <p className="badgeFormat badge-code">VS Code</p>
        </div>
      </div>
    );
  }
}

export default Skills;
