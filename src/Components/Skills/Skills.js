import "./Skills.css";
import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";

import Html from "../../img/htmlll.jpg";
import { SkillBar } from "react-skills";

class Skills extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  render() {
    return (
      <Container>
        <Row className="tet">
          <Col lg={4} md={6} sm={12} xs={6}>
            <div className="test">mohab</div>
          </Col>
          <Col lg={4} sm={12} xs={6}>
            <div className="test">mohsen</div>
          </Col>{" "}
          <div className="col-lg-4  hidden-md ">
            <div className="test">mohab</div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Skills;
