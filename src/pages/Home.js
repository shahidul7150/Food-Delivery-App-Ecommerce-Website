import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import Helmet from "../components/Helmet/Helmet";
import Category from "../components/UI/category/Category";
import "../styles/hero_section.css";
import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg03 from "../assets/images/bread.png";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import ProductCard from "../components/UI/product-card/ProductCard";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor,sit amet consetrtur adipicing elit minus doloremque",
  },
  {
    title: "Super dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor,sit amet consetrtur adipicing elit minus doloremque",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor,sit amet consetrtur adipicing elit minus doloremque",
  },
];
const Home = () => {
  const [category,setCategory]=useState('ALL')
  const [allProducts,setAllProducts]=useState(products)
  useEffect(()=>{
if(category==='ALL'){
  setAllProducts(products)
}
if(category==='BURGER'){
  const filteredProducts=products.filter(item=>item.category==='Burger')
  setAllProducts(filteredProducts)
}
if(category==='PIZZA'){
  const filteredProducts=products.filter(item=>item.category==='Pizza')
  setAllProducts(filteredProducts)
}
if(category==='BREAD'){
  const filteredProducts=products.filter(item=>item.category==='Bread')
  setAllProducts(filteredProducts)
}
  },[category])
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="mb-3">Time to make an order</h5>
                <h1 className="hero_titles mb-4 )">
                  <span>Hungry ? </span> just few moment{" "}
                  <span>our team at </span>
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
        <Category />
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">What we serve</h5>
              <h2 className="feature_title">Just sit back at home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="feature_text mb-1 mt-4 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
                quisquam.
              </p>
              <p className="feature_text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
                quisquam.
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div className="feature_item text-center px-4 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food_category d-flex align-items-center justify-content-center gap-4">
                <button className={`all_btn  ${category==='ALL'?'foodBtnActive':''}`} onClick={()=>setCategory('ALL')}>All</button>
                <button className={`d-flex align-items-center gap-2  ${category==='BURGER'?'foodBtnActive':''}`} onClick={()=>setCategory('BURGER')}>
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button className={`d-flex align-items-center gap-2 ${category==='PIZZA'?'foodBtnActive':''}`} onClick={()=>setCategory('PIZZA')} >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button className={`d-flex align-items-center gap-2  ${category==='BREAD'?'foodBtnActive':''}`} onClick={()=>setCategory('BREAD')}>
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
