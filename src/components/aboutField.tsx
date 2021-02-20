import React from "react";
import { svg2, svg3, svg4 } from "../lib/svg-render";
import InfoBoctReply from "./other_components";
import "../styles/aboutField.css";

//Button for toggling the theme. default dark.
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

//On click, A boct will reply the information about this webApp
class InfoButton extends React.Component<{ clickInfo?: any }, {}> {
  constructor(props: any) {
    super(props);
    this.reply_boctInfo = this.reply_boctInfo.bind(this);
  }

  reply_boctInfo() {
    this.props.clickInfo("cb", <InfoBoctReply />);
  }

  render() {
    return (
      <button onClick={this.reply_boctInfo} id="infoBtn" title="Info">
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

class AboutPanel extends React.Component<{ clickInfo?: any }, {}> {
  static defaultProps: { clickInfo: any };

  render() {
    return (
      <div className="about">
        <fieldset>
          <legend>About BOcT</legend>
          <div className="aboutbtns">
            <SettingsButton />
            <InfoButton clickInfo={this.props.clickInfo} />
            <ThemeButton />
          </div>
          <p id="releaseVer">Version 4.0 | Feb 2021</p>
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
AboutPanel.defaultProps = {
  clickInfo: function lol(x: any, y: any) {
    return "ok";
  },
};

export default AboutPanel;
