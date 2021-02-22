import "./Welcome_page.css";
import { Component } from "react";
import img1 from "../../img/diego-ph-5LOhydOtTKU-unsplash.jpg";
import img2 from "../../img/vincent-guth-uhoILl3HUZM-unsplash.jpg";

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
        <div>
          <span>Ima</span>
        </div>
      </div>
    );
  }
}

export default Welcome;
