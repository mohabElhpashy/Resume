import "./Contact.css";
import { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import GoogleMap from "google-map-react";

import "bootstrap/dist/css/bootstrap.min.css";

// import { SkillBar } from "react-skills";
const mapStyles = {
  width: "100%",
  height: "100%",
};

const markerStyle = {
  height: "50px",
  width: "50px",
  marginTop: "-50px",
};

const imgStyle = {
  height: "100%",
  marginTop: "20px",
};

const Marker = ({ title }) => (
  <div style={markerStyle}>
    <img
      style={imgStyle}
      src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png"
      alt={title}
    />
    <h3>{title}</h3>
  </div>
);

class Contact extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2kkmk0j",
        "template_896g7zi",
        e.target,
        "user_Ugf31GqpmS1DZzPts2q65"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  render() {
    return (
      <Container>
        <Row className="header_bar">
          <Col className="header_bar">
            <h1>Contact</h1>
            <div className="linee"></div>
          </Col>
          <Col xl={12}>
            <Form onSubmit={this.sendEmail}>
              <Form.Group>
                <Form.Control
                  data-aos="fade-right"
                  type="name"
                  name="name"
                  placeholder="Enter Name"
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  data-aos="fade-left"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  data-aos="fade-right"
                  type="Subject"
                  name="subject"
                  placeholder="Subject"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  data-aos="fade-left"
                  as="textarea"
                  rows={3}
                  placeholder=" message"
                  name="message"
                />
              </Form.Group>

              <Button
                data-aos="fade-right"
                variant="primary"
                type="submit"
                style={{ marginbottom: "20px" }}
              >
                Submit
              </Button>
            </Form>
          </Col>{" "}
          {/* <Col>
            <hr />
          </Col> */}
          <Col>
            <div className="map">
              <GoogleMap
                data-aos="fade-right"
                style={mapStyles}
                bootstrapURLKeys={{
                  key: "AIzaSyC3jXMfKnMllAvq3RnN-HJZT4O_apnpw8Q",
                }}
                center={{ lat: 30.054924, lng: 31.19039 }}
                zoom={14}
              >
                <Marker
                  title={"Current Location"}
                  lat={30.054924}
                  lng={31.19039}
                ></Marker>
              </GoogleMap>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
