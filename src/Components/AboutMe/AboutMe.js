import "./AboutMe.css";
import { Component } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import about_img from "../../img/about_img.jpg";

// import { IoMdReorder } from "react-icons/io";
// import {
//   AiFillGithub,
//   AiFillLinkedin,
//   AiFillFacebook,
//   AiOutlineGoogle,
// } from "react-icons/ai";

class AboutMe extends Component {
  render() {
    return (
      <div className="about_me_contain">
        <Container>
          <Row>
            <Col>
              <img
                className="main_div"
                alt="sora"
                style={{ width: "560px", height: "401px" }}
                src={about_img}
              />
            </Col>
            <Col>
              <div>
                <h1 class="fh5co-heading">About Me</h1>
                <div class="line"></div>
                <div
                  data-v-3256f486=""
                  data-tag="Who am I?"
                  className="about_text"
                >
                  ـــــــــــــــــــ Who am I ?
                </div>
                <h2>Need A Creative Website?</h2>
                <h3
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
                <p>
                  Hi there, I'm a Front-end Web Developer with a great
                  experience in building a creative web application. I have been
                  building lots of static and dynamic websites with a responsive
                  design and high compatibility with all browsers using modern
                  and standard techniques. And also I have an experience in Vue
                  ,react js framework to build a single page applications with a
                  fast and high performance web app and also have amany from
                  logo designs.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
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
