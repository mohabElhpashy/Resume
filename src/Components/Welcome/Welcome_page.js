import "./Welcome_page.css";
import { Component } from "react";
import img1 from "../../img/diego-ph-5LOhydOtTKU-unsplash.jpg";
import img2 from "../../img/vincent-guth-uhoILl3HUZM-unsplash.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FcSettings, FcSearch, FcLineChart } from "react-icons/fc";
import { FaRegPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div>
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
                width: "170px",
                height: "50px",
                letterSpacing: "3px",
                fontFamily: "Courier, monospace		",
              }}
              variant="light"
            >
              DownLOAD CV
              <AiOutlineArrowDown />
            </Button>
          </div>
        </div>
        <Container>
          <Row>
            <Col>
              <div className="main_div">
                <div className="fh5co-icon">
                  <FcSettings size={80} enableBackground="gray" color="red" />
                </div>
                <div class="fh5co-text">
                  <h3>Strategy</h3>
                  <p>
                    Working on creating a creative and responsive project and
                    making some animation in my projects so that it has realism.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="main_div">
                <div class="fh5co-icon">
                  <FcSearch size={80} />
                </div>
                <div class="fh5co-text">
                  <h3>Explore</h3>
                  <p>
                    I always strive to learn and acquire more and follow what
                    the market is going through in terms of updates and changes
                    to programming languages.{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="main_div">
                <div class="fh5co-icon">
                  <FaRegPaperPlane size={50} />
                </div>
                <div class="fh5co-text">
                  <h3>Direction</h3>
                  <p>
                    I receive the work from UI&amp;UX designer and work on
                    coding psd file in an organized way, with the addition of
                    some additions that I like.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="main_div">
                <div class="fh5co-icon">
                  <FcLineChart size={80} />
                </div>
                <div class="fh5co-text">
                  <h3>Expertise</h3>
                  <p>
                    Experienced Front-end web development as Front-end developer
                    With history of working in the information technology web
                    design &amp; development.{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Welcome;
