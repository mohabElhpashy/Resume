import "./Skills.css";
import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";

import Capture from "../../img/Capture.jpg";
import Musiq from "../../img/musi.jpg";

// import { SkillBar } from "react-skills";

class Skills extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  goto1 = () => {
    window.location = "https://chitosaneg.com/";
  };
  goto2 = () => {
    window.location = "https://www.musiqme.com/";
  };
  render() {
    return (
      <Container>
        <Row className="header_bar">
          <Col className="header_bar">
            <h1>Portfoli</h1>
            <div className="linee"></div>
          </Col>
          <Col data-aos="fade-right" lg={6} md={6} sm={6} xs={12}>
            <div className="projects">
              <img
                onClick={this.goto1}
                style={{ width: "401.49px" }}
                src={Capture}
                alt="project"
              />
            </div>
          </Col>
          <Col data-aos="fade-left" lg={6} md={6} sm={6} xs={12}>
            <div className="projects">
              <img
                onClick={this.goto2}
                style={{ width: "401.49px" }}
                src={Musiq}
                alt="project"
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Skills;
