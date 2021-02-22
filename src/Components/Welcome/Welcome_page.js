import "./Welcome_page.css";
import { Component } from "react";
import img1 from "../../img/diego-ph-5LOhydOtTKU-unsplash.jpg";
import img2 from "../../img/vincent-guth-uhoILl3HUZM-unsplash.jpg";
import { Button } from "react-bootstrap";

class Welcome extends Component {
  state = {
    img: [img1, img2],
    index: 0,
  };
  componentDidMount() {
    if (this.state.index === 1) this.setState({ index: 0 });
    setInterval(() => {
      this.setState({
        index: this.state.index + 1,
      });
      if (this.state.index >= this.state.img.length) {
        this.setState({ index: 0 });
      }
    }, 6000);
  }
  render() {
    return (
      <div className="container">
        <img
          className="Welcome"
          alt="sora"
          src={this.state.img[this.state.index]}
        />
        <div className="div_content">
          <div>
            <h1>I'M MOHAB</h1>
            <h2>WEB DEVElOPER</h2>
            <Button
              style={{
                width: "150px",
                height: "50px",
                letterSpacing: "3px",
                fontFamily: "URW Chancery L, cursive	",
              }}
              variant="light"
            >
              DownLOAD CV
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
