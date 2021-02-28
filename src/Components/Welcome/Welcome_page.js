import "./Welcome_page.css";
import { Component } from "react";
import img1 from "../../img/steal.jpg";
import img2 from "../../img/vincent-guth-uhoILl3HUZM-unsplash.jpg";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FcSettings, FcSearch, FcLineChart } from "react-icons/fc";
import { FaRegPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import html_img from "../../img/html.jpg";
import ui from "../../img/ui.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

class Welcome extends Component {
  state = {
    img: [img1, img2],
    index: 0,
  };
  componentDidMount() {
    Aos.init({ duration: 2000 });

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
                width: "190px",
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
              <div className="main_div" data-aos="fade-right">
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
              <div className="main_div" data-aos="fade-left">
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
              <div className="main_div" data-aos="fade-right">
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
              <div className="main_div" data-aos="fade-left">
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
          <hr />
          <h2 className="h">VARIOUS SPECIALTIES</h2>
          <Row>
            <Col>
              <Card
                className="main_div"
                style={{ width: "18rem" }}
                data-aos="fade-up"
              >
                <Card.Img variant="top" src={html_img} />
                <Card.Body>
                  <Card.Title>WEB DEVELOPMENT</Card.Title>
                  <Card.Text>
                    Working on the project through HTML5, Css3 , Json ,
                    Javascript , jQuery , React,relying on all interface such as
                    Windows, Ipad, or the Mac through frameworks as Bootstrap ,
                    Dealing with Wordpress and languages of the Back-end as
                    node.js and Database as mongo db .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="main_div"
                style={{ width: "18rem" }}
                data-aos="fade-down"
              >
                <Card.Img variant="top" src={ui} />
                <Card.Body>
                  <Card.Title>WEB DESIGN</Card.Title>

                  <Card.Text>
                    It's important for me to realize sizes and the equivalent of
                    colors together, and I design the web face using some
                    programs such as Xd .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Welcome;
