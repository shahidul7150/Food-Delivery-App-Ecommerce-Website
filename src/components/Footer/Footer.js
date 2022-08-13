import React from 'react';
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import logo from "../../assets/images/res-logo.png";
import '../../styles/footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
<Container>
    <Row>
        <Col lg="3" md="4" sm="6">
        <div className="footer_logo text-start">
            <img src={logo} alt="logo" />
            <h5>Foody Dish</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, molestias!Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </Col>
        <Col lg="3" md="4" sm="6">
            <h5 className='footer_title'>Delivery Time</h5>
            <ListGroup className='deliver_time_list'>
                <ListGroupItem className='delivery_time-item border-0 ps-0'>
                    <span>Sunday - Thursday</span>
                    <p>10:00am - 11:00pm</p>
                </ListGroupItem>
                <ListGroupItem className='delivery_time-item border-0 ps-0'>
                    <span>Friday - Saturday</span>
                    <p>Off day</p>
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col lg="3" md="4" sm="6">
        <h5 className='footer_title'>Contact</h5>
            <ListGroup className='deliver_time_list'>
                <ListGroupItem className='delivery_time-item border-0 ps-0'>
                   <p>Location:North kaunia Barisal-8200, Bangladesh</p>
                   
                </ListGroupItem>
                <ListGroupItem className='delivery_time-item border-0 ps-0'>
                   <span>Phone: +880 1750432592</span>
                   
                </ListGroupItem>
                <ListGroupItem className='delivery_time-item border-0 ps-0'>
                    <span>Email: example@gmail.com</span>
                   
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col lg="3" md="4" sm="6">
        <h5 className='footer_title'>Newsletter</h5>
        <p>Subscribe our newsletter</p>
        <div className="newsletter">
            <input type="email" placeholder='Enter your email' />
            <span><i className="ri-send-plane-fill"></i></span>
        </div>
        </Col>
    </Row>
    <Row className='mt-5'>
        <Col lg="6" md="6">
            <p className='copyright_text'>Copyright&copy; -2022 website made by Shahidul Islam.all Right Reserved</p>
        </Col>
        <Col lg="6" md="6">
            <div className="social_link d-flex align-items-center justify-content-end gap-4 ">
                <p className='m-0'>Follow: </p>
                <span><Link to="https://www.facebook.com/progshahidul"> <i className="ri-facebook-line "></i></Link> </span>
                <span><Link to="https://github.com/shahidul7150"> <i className="ri-github-line"></i></Link> </span>
                <span><Link to="https://www.linkedin.com/in/progshahidul/"> <i className="ri-linkedin-line"></i></Link> </span>
            </div>
        </Col>
    </Row>
</Container>
    </footer>    
  )
}

export default Footer