import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import Helmet from "../components/Helmet/Helmet";
import Category from "../components/UI/category/Category";
import "../styles/hero_section.css";
import "../styles/home.css";
const Home = () => {
  return (
    <Helmet title="Home">
      <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <h5 className="mb-3">Time to make an order</h5>
              <h1 className="hero_titles mb-4 )">
                <span>Hungry ? </span> just few moment <span>our team at </span>
                your door
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                distinctio veritatis ullam voluptate, expedita aliquam!
              </p>
              <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                <button className="order_btn d-flex align-items-center justify-content-between">
                  Order Now
                  <i class="ri-arrow-right-s-line"></i>
                </button>
                <button className="all_foods_btn">
                  <Link to="/foods">See all foods</Link>
                </button>
              </div>
              <div className="hero_service d-flex align-items-center gap-5 mt-5">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping_icon">
                    <i class="ri-truck-line"></i>
                  </span>
                  No shipping charge
                </p>
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping_icon">
                    <i class="ri-shield-check-line"></i>
                  </span>
                  100% secure checkout
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero_img">
              <img src={heroImg} alt="hero Img" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      <section className="py-5">
        <Category/>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">What we serve</h5>
              <h2 className="feature_title">Just sit back at home</h2>
              <h2 className="feature_title">we will <span>take care</span></h2>
              <p className="feature_text mb-1 mt-4 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quisquam.</p>
              <p className="feature_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quisquam.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
