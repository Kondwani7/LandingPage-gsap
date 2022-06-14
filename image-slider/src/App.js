import React, {useRef, useState, useEffect} from 'react'
import {Power3 } from 'gsap';
import { TweenLite } from 'gsap/gsap-core';
import './App.scss';
import 'reset-css'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import {BsArrowRightCircleFill} from 'react-icons/bs'
const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./assets/image3.jpg")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./assets/image.jpg")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./assets/image2.jpg")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  }
];


function App() {
  let imageList = useRef(null);
  let testimonialList = useRef(null)
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  })

  useEffect(() => {
    
  }, [])

  const prevSlide= () => {}
  const leftArrow = () => {}
  const nextSlide =() => {}
  const rightArrow =() => {}

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={prevSlide} className="arrows left">
          <span>
            <BsArrowLeftCircleFill size={32}/>
          </span>
        </div>
        <div className="inner">
          <div className="t-image">
            <ul ref={el => (imageList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={testimonials[1].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={testimonials[2].image} alt={testimonials[0].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul ref={el => (testimonialList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{testimonials[0].quote}</p>
                  <h3 className="name">{testimonials[0].name}</h3>
                  <h4 className="title">{testimonials[0].title}</h4>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{testimonials[1].quote}</p>
                  <h3 className="name">{testimonials[1].name}</h3>
                  <h4 className="title">{testimonials[1].title}</h4>
                </div>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{testimonials[2].quote}</p>
                  <h3 className="name">{testimonials[2].name}</h3>
                  <h4 className="title">{testimonials[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrows right" onClick={nextSlide}>
          <BsArrowRightCircleFill size={32}/>
        </div>
      </div>
    </div>
  );
}

export default App;
