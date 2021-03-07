import "./AboutMe.css";
import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import Aos from "aos";
import CountUp from "react-countup";
import img from "../../img/htmlll.jpg";
import img1 from "../../img/bootstrap.jpg";
import img2 from "../../img/HTML5.jpg";
import img3 from "../../img/css1.jpg";
import img4 from "../../img/css3.jpg";
import img5 from "../../img/ajax.jpg";
import img6 from "../../img/es6.jpg";
import img7 from "../../img/github.jpg";
import img8 from "../../img/javascript-icon.jpg";
import img9 from "../../img/json.jpg";
import img10 from "../../img/media-queries.jpg";

import { SkillBar } from "react-skills";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import about_img from "../../img/about_img.jpg";

// import { IoMdReorder } from "react-icons/io";
// import {
//   AiFillGithub,
//   AiFillLinkedin,
//   AiFillFacebook,
//   AiOutlineGoogle,
// } from "react-icons/ai";

class AboutMe extends Component {
  state = {
    image: [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
    index: 0,
    prefix: [100, 85, 100, 95, 93, 88, 75, 80, 98, 89, 50],
  };
  componentDidMount() {
    Aos.init({ duration: 2000 });
    if (this.state.index === this.state.image.length)
      this.setState({ index: 0 });

    setInterval(() => {
      this.setState({
        index: this.state.index + 1,
      });
      if (this.state.index >= this.state.image.length) {
        this.setState({ index: 0 });
      }
    }, 6000);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="main_divv">
              <img
                className="sorrra"
                data-aos="fade-right"
                alt="sora"
                src={about_img}
              />
            </div>
          </Col>
          <Col>
            <div data-aos="fade-left">
              <h1 className="fh5co-heading">About Me</h1>
              {/* <div
                class="line"
                style={{ position: "relative", bottom: "30px" }}
              ></div> */}
              <div className="line"></div>
              <div
                data-v-3256f486=""
                data-tag="Who am I?"
                className="about_text"
              >
                ـــــــــــــــــــ Who am I ?
              </div>
              <h2>Need A Creative Website?</h2>
              <h3
                className="fh5coo-heading"
                //       style="
                //  position: relative;
                //  color: #000;
                //  top: -40px;
                //  -webkit-animation: fadeInLeft .4s 1s both;
                // 	animation: fadeInLeft .4s 1s both;
                // 	font-family: Comic Sans MS;
                // 	text-align: center;

                // 	"
              >
                I can Help You.
              </h3>
              <p
                className="ppp"
                style={{
                  color: "#5b5555",
                  fontfamily: "Comic Sans MS",
                  fontsize: "18px",
                }}
              >
                Hi there, I'm a Front-end Web Developer with a great experience
                in building a creative web application. I have been building
                lots of static and dynamic websites with a responsive design and
                high compatibility with all browsers using modern and standard
                techniques. And also I have an experience in Vue ,react js
                framework to build a single page applications with a fast and
                high performance web app and also have amany from logo designs.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div data-aos="fade-right" className="main_divv">
              <Button
                style={{ width: "160px", height: "50px" }}
                data-aos="fade-right"
                onDurationChange={2000}
                variant="primary"
                duration={2000}
                onClick={() => {
                  scroll.scrollToBottom();
                }}
              >
                Skills
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="cool">
            <div data-aos="fade-left" className="skill">
              <h1 className="fh5co-headinggg" style={{ letterSpacing: "30px" }}>
                Skills
              </h1>
              <div className="line"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="smartphone">
              <div className="content">
                <img
                  src={this.state.image[this.state.index]}
                  alt="sora"
                  style={{ width: "316px", backgroundSize: "360px" }}
                />
              </div>
              <SkillBar
                level={this.state.prefix[this.state.index]}
                name="skill:"
                color="gray"
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;

// Hi there, I'm a Front-end Web Developer with a great experience in
// building a creative web application. I have been building lots of
// static and dynamic websites with a responsive design and high
// compatibility with all browsers using modern and standard
// techniques. And also I have an experience in Vue ,react js framework
// to build a single page applications with a fast and high performance
// web app and also have amany from logo designs.
