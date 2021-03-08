import "./Navbar.css";
import { Component } from "react";

import { IoMdReorder } from "react-icons/io";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineGoogle,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

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
  check_and_hide = () => {
    if (window.innerWidth <= 900) {
      document.getElementById("MAIN").style.width = "0px";
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
                <NavLink
                  onClick={this.check_and_hide}
                  exact
                  activeClassName="main-nav-active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {/* <li className="active">
                <NavLink
                  onClick={this.check_and_hide}
                  exact
                  activeClassName="main-nav-active"
                  to="/skill"
                >
                  Home
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  onClick={this.check_and_hide}
                  exact
                  to="/Aboutme"
                  activeClassName="main-nav-active"
                >
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={this.check_and_hide}
                  exact
                  activeClassName="main-nav-active"
                  to="Portfolio"
                >
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={this.check_and_hide}
                  exact
                  activeClassName="main-nav-active"
                  to="CONTACT"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="fh5co-footer">
            <p>
              <small>© 2020 Mohab. All Rights Reserved</small>
            </p>
            <div className="iconsss">
              <a href="https://www.facebook.com/mohab.elhpashy">
                {" "}
                <AiFillFacebook size={25} />
              </a>

              <a href="mailto:mohab.hafez332@gmail.com">
                <AiOutlineGoogle color="gray" size={25} />
              </a>
              <a href="https://github.com/mohabElhpashy">
                <AiFillGithub size={25} />
              </a>
              <a href="https://www.linkedin.com/in/mahab-mohamed-07a468167/">
                <AiFillLinkedin color="gray" size={25} />
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
