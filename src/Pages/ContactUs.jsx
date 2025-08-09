import React, { useState } from 'react'
import InnerBanner from '../components/InnerBanner'
import { Col, Container, Row } from 'react-bootstrap'
import Testimonials from "../components/Testimonials";
import { toast } from 'react-toastify';

const ContactUs = ({ getIntouch,testimonails }) => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "943605d9-a72b-4101-b126-65867a87780a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setResult("");
      event.target.reset();
    } else {
      toast.error(`Error: ${data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setResult("");
    }
  };


    return (
        <>
            <InnerBanner title="Contact Us" />
            <section className='contactus-sec'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="getintouch-txt">
                                <h3>{getIntouch.title}</h3>
                                <p>{getIntouch.paragraph}</p>
                                {getIntouch.officeLocation.map((e, index) => (
                                    <div className="getintouch-assets" key={index}>
                                        <span>{<e.icon />}</span>
                                        <div className="getintouch-asset-txt">
                                            <h4>{e.heading}</h4>
                                            <h6>{e.para}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="contactus-form">
                                <div className="contactform-head">
                                    <h6>Contact Us</h6>
                                    <h4>Write us a message</h4>
                                </div>
                                <form onSubmit={onSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="input-field">
                                                <label htmlFor="Your Name">Your Name</label>
                                                <input type="text" name="name" placeholder="Type your name here..." required/>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="input-field">
                                                <label htmlFor="Your Phone">Your Phone</label>
                                                <input type="text" name="number" placeholder="Type your number here..." />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="input-field">
                                                <label htmlFor="Your Email">Your Email</label>
                                                <input type="email" name="email" placeholder="Type your email here..." required/>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="input-field">
                                                <label htmlFor="Your Message">Your Message</label>
                                                <textarea name="message" id="" placeholder="Type your message here..." required></textarea>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="contactform-btn">
                                                <button type='submit' className='theme-btn'>Submit</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Testimonials testimonails={testimonails} />
        </>
    )
}


export default ContactUs