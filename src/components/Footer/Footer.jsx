import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

import "./footer.css";

const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="logo">
              <img src={Logo} alt="" />
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>

              <div className="d-flex align-items-center social__links gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line" />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill" />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line" />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line" />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <h5 className="footer__link-title">Discovery</h5>

            <ListGroup className="footer__quick-links">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg={3}>
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg={3}>
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 d-flex align-items-center gap-3 border-0">
                <h6 className="d-flex align-items-center mb-0 gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Bien Hoa, Dong Nai</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 d-flex align-items-center gap-3 border-0">
                <h6 className="d-flex align-items-center mb-0 gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">nhnhattan@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
            <ListGroupItem className="ps-0 d-flex align-items-center gap-3 border-0">
              <h6 className="d-flex align-items-center mb-0 gap-2">
                <span>
                  <i className="ri-phone-fill"></i>
                </span>
                Phone:
              </h6>
              <p className="mb-0">+0353699577</p>
            </ListGroupItem>
          </Col>

          <Col lg={12} className="pt-5 text-center">
            <p className="copyright">
              Copyright {year}, design and develope by Nhat Tan. All rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
