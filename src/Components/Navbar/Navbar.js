import "./Navbar.css";
import { Component } from "react";

import { IoMdReorder } from "react-icons/io";

class Nnavbar extends Component {
  state = {
    flag: true,
  };
  showDivinfo = () => {
    if (this.state.flag === false) {
      document.getElementById("MAIN").style.width = "0px";
      this.setState({ flag: true });
    }
    if (this.state.flag) {
      document.getElementById("MAIN").style.width = "270px";
      this.setState({ flag: false });
    }
  };
  render() {
    return (
      <div>
        <div id="MAIN" className="main">
          <h2>MOhaB</h2>
          <div className="links">
            <ul>
              <li className="active">
                <a href="mohab">Home</a>
              </li>
              <li>
                <a href="mohab">About</a>
              </li>
              <li>
                <a href="mohab">Portfolio</a>
              </li>
              <li>
                <a href="mohab">SKILLS</a>
              </li>
              <li>
                <a href="mohab">CONTACT</a>
              </li>
            </ul>
          </div>
          <div class="fh5co-footer">
            <p>
              <small>© 2020 badr. All Rights Reserved</small>
            </p>
          </div>
        </div>
        <div className="threelines">
          <IoMdReorder onClick={this.showDivinfo} size={50} color="black" />
        </div>
      </div>
    );
  }
}

export default Nnavbar;
