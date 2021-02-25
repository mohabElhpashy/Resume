import "./Navbar.css";
import { Component } from "react";

import { IoMdReorder } from "react-icons/io";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineGoogle,
} from "react-icons/ai";

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="About">About</a>
              </li>
              <li>
                <a href="Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="SKILLS">SKILLS</a>
              </li>
              <li>
                <a href="CONTACT">CONTACT</a>
              </li>
            </ul>
          </div>
          <div class="fh5co-footer">
            <p>
              <small>© 2020 Mohab. All Rights Reserved</small>
            </p>
            <div className="iconsss">
              <a href="https://www.facebook.com/mohab.elhpashy">
                {" "}
                <AiFillFacebook color="black" />
              </a>

              <a href="mailto:mohab.hafez332@gmail.com">
                <AiOutlineGoogle color="black" />
              </a>
              <a href="https://github.com/mohabElhpashy">
                <AiFillGithub color="black" />
              </a>
              <a href="https://www.linkedin.com/in/mahab-mohamed-07a468167/">
                <AiFillLinkedin color="black" />
              </a>
            </div>
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
