import "./Navbar.css";

function Nnavbar() {
  return (
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
          <small>
            © 2020 badr. All Rights Reserved
            {/* <span>
              Designed by <a href="mohab.hafez332@gmail.com">MOhaB</a>
            </span>
            <span>
              Freelancer: <a>Front-end</a>
            </span> */}
          </small>
        </p>
      </div>
    </div>
  );
}

export default Nnavbar;
