import React from "react";
import { svg2, svg3, svg4 } from "../lib/svg-render";
import "../styles/aboutpanel.css";

class ThemeButton extends React.Component {
  ChangeTheme() {
    let htmlElem = document.documentElement;

    if (htmlElem.dataset.theme === "dark") {
      htmlElem.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      htmlElem.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }

  render() {
    return (
      <button onClick={this.ChangeTheme} title="Toggle Dark/Light Mode">
        <svg viewBox="0 0 512 512">
          <path id="svg4" d={svg4} />
        </svg>
      </button>
    );
  }
}

class InfoButton extends React.Component {
  render() {
    return (
      <button id="infoBtn" title="Info">
        <svg viewBox="0 0 512 512">
          <path id="svg3" d={svg3} />
        </svg>
      </button>
    );
  }
}

class SettingsButton extends React.Component {
  render() {
    return (
      <button id="settingBtn" title="Settings">
        <svg viewBox="0 0 512 512">
          <path id="svg2" d={svg2} />
        </svg>
      </button>
    );
  }
}


class AboutPanel extends React.Component {
  render() {
    return (
      <div className="about">
        <fieldset>
          <legend>About BOcT</legend>
          <div className="aboutbtns">
            <SettingsButton />
            <InfoButton />
            <ThemeButton />
          </div>
          <p id="releaseVer">Version 4.0 | Jan 2021</p>
          <button id="pwaInstallBtn">install</button>
          <hr />
          <p>BOcT is a Static Browser Chatbot</p>
          <p>It's currently in Lazy Development</p>
          <p>Future Updates to BOcT can make it perform basic Maths, Maybe suggest you some Movies...</p>
        </fieldset>
      </div>
    );
  }
}

export default AboutPanel;
