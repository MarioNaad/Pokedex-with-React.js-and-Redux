import React, { Component } from "react";
import './styles/Hero.css'

export default class Hero extends Component {
  render() {
    return (
      <div className="Badges" id="top">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges_conf-logo" src={this.props.heroBanner} alt="Conf Logo" />
          </div>
        </div>
      </div>
    );
  }
}
