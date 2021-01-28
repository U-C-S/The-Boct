import React from "react";
import ReactDOM from "react-dom";
import "../styles/infoModal.css"

const modalRoot = document.getElementById("modal-root") as HTMLDivElement;
class Modal extends React.Component {
  el: HTMLDivElement;

  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.className = "info_window";
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class InfoModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal>
        <div className="info_content">
          <p>Some commands for interesting replies:</p>
          <ul>
            <li>What is your age / your age</li>
            <li>Annoy me / idiot</li>
            <li>google/youtube/bing/duckduckgo *word*</li>
            <li>roll a dice / roll dice</li>
            <li>flip a coin / toss a coin</li>
          </ul>
          <hr />
          <p>Also, BOcT can perform some unit-conversions in Length, Areas, Mass, Temperatures and Volume.</p>
          <p>To Perform unit-conversions: conv XA to B</p>
          <p>X: unit value | A: the base unit | B: the output unit</p>
          <p>Ex: conv 100cm to m (outputs 1m)</p>
          <hr />
          <p>some DOt Commands:</p>
          <ul>
            <li>.name</li>
            <li>.age</li>
            <li>.god</li>
            <li>.v</li>
            <li>.code</li>
            <li>.dice</li>
            <li>.coin</li>
          </ul>
        </div>
        <div className="info_links">
          <a href="https://github.com/The-BOcT/the-boct.github.io/blob/master/LICENSE.md" title="Under MIT LICENSE">
            © 2020 U-C-S
          </a>
          <br />
          <a href="https://github.com/The-BOcT/the-boct.github.io/">View Source</a>
        </div>
        <p className="text1">Written with ❤ in TypeScript</p>
        <button onClick={this.componentWillUnmount} id="info_close">
          close
        </button>
      </Modal>
    );
  }
}

export default InfoModal;
