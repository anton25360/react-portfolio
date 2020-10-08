import React, { Component } from "react";
import MajorProjectTemplate from "./MajorProjectTemplate";
import "./MajorProjects.css";


export default class MajorProjects extends Component {
  render() {
    return (
      <div id='MPContainer'>
        <MajorProjectTemplate namee="bro"></MajorProjectTemplate>
      </div>
    );
  }
}
