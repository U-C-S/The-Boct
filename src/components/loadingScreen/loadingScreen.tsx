import React from "react";
import "./loadingScreen.scss";

type Iloaded = {
  text: string;
  style: any;
};
class Loading extends React.Component<{}, { loaded: Iloaded }> {
  constructor(props: any) {
    super(props);
    this.state = {
      loaded: { text: "Boct Loading...", style: {} },
    };
  }

  loadcomplete = () => {
    this.setState({
      loaded: {
        text: "Boct Loaded",
        style: { backgroundColor: "#ff1439" },
      },
    });
  };

  render() {
    return (
      <div id="loadScreen">
        <div className="load">
          <div id="load_barr" style={this.state.loaded.style} onAnimationEnd={this.loadcomplete}></div>
          <div id="load_text">{this.state.loaded.text}</div>
        </div>
      </div>
    );
  }
}

export { Loading };
