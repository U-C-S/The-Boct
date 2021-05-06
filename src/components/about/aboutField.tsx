import React from "react";
import { CustomReplies } from "../other/";

import { ReplyContext } from "../../util/";
import { svg2, svg3, svg4 } from "../../util/svg-draw";
import "./aboutField.scss";

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
class InfoButton extends React.Component {
  render() {
    return (
      <ReplyContext.Consumer>
        {(replyTech) => (
          <button
            onClick={() => {
              replyTech?.addReply(<CustomReplies.InfoBoctReply />, "cb");
            }}
            id="infoBtn"
            title="Info"
          >
            <svg viewBox="0 0 512 512">
              <path id="svg3" d={svg3} />
            </svg>
          </button>
        )}
      </ReplyContext.Consumer>
    );
  }
}

class SettingsButton extends React.Component {
  render() {
    let message = (
      <div className="boct_talk">
        <p>Will be Available in next update</p>
      </div>
    );
    return (
      <ReplyContext.Consumer>
        {(replyTech) => (
          <button onClick={() => replyTech.addReply(message, "b")} id="settingBtn" title="Settings">
            <svg viewBox="0 0 512 512">
              <path id="svg2" d={svg2} />
            </svg>
          </button>
        )}
      </ReplyContext.Consumer>
    );
  }
}

function AboutPanel() {
  return (
    <div className="about">
      <fieldset>
        <legend>About BOcT</legend>
        <div className="aboutbtns">
          <SettingsButton />
          <InfoButton />
          <ThemeButton />
        </div>
        <p id="releaseVer">Version 4 | Feb 2021</p>
        <hr />
        <p>BOcT is a Static Browser Chatbot</p>
        <p>It's currently in Lazy Development</p>
        <p>Future Updates to BOcT can make it perform basic Maths, Maybe suggest you some Movies...</p>
      </fieldset>
    </div>
  );
}

export { AboutPanel };

/*
class PWAbutton extends React.Component {
  addToHomeScreen = () => {
    let deferredPrompt: any;
    const addBtn = document.getElementById("pwaInstallBtn") as HTMLButtonElement;

    addBtn.hidden = true;
    window.addEventListener("beforeinstallprompt", (e: any) => {
      e.preventDefault();
      deferredPrompt = e;
      addBtn.hidden = false;
    });

    addBtn.addEventListener("click", async () => {
      addBtn.hidden = true;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      deferredPrompt = null;
    });

    window.addEventListener("appinstalled", () => {
      addBtn.hidden = true;
      deferredPrompt = null;
      console.log("PWA was installed");
    });
    //addBtn.style.display = "block";
  };
  render() {
    return (
      <button id="pwaInstallBtn" onClick={this.addToHomeScreen}>
        install
      </button>
    );
  }
}
*/
