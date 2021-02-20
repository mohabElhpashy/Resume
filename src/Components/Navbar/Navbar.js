import "./Navbar.css";

import { IoMdReorder } from "react-icons/io";

function Nnavbar() {
  return (
    <div>
      <div className="main">
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
            </li>{" "}
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
        <IoMdReorder size={50} color="white" />
      </div>
    </div>
  );
}

export default Nnavbar;
