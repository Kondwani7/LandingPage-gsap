import React, {useRef, useState, useEffect} from 'react'
import { TweenLite, Power3 } from 'gsap';
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
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        {/*arrow left */}
        <div className='arrows left'>
          <BsArrowLeftCircleFill size={32}/>
        </div>
        {/*images*/}
        <div className='inner'>
          <div className='t-image'>
            <ul>
              <li>
                <img src={testimonials[0].image} alt={testimonials[0].name}/>
              </li>
              <li>
                <img src={testimonials[1].image} alt={testimonials[1].name}/>
              </li>
              <li>
                <img src={testimonials[2].image} alt={testimonials[2].name}/>
              </li>
            </ul>
          </div>
          {/*content */}
          <div className='t-content'>
            <ul>
              <li>
                <div className='content-inner'>
                  <p className='quote'>{testimonials[0].quote}</p>
                  <p className='name'>{testimonials[0].name}</p>
                  <p className='title'>{testimonials[0].title}</p>
                </div>
              </li>
                <li>
                <div className='content-inner'>
                  <p className='quote'>{testimonials[1].quote}</p>
                  <p className='name'>{testimonials[1].name}</p>
                  <p className='title'>{testimonials[1].title}</p>
                </div>
              </li>
                <li>
                <div className='content-inner'>
                  <p className='quote'>{testimonials[2].quote}</p>
                  <p className='name'>{testimonials[2].name}</p>
                  <p className='title'>{testimonials[2].title}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/*arrow right*/}
        <div className='arrows right'>
          <BsArrowRightCircleFill size={32}/>
        </div>

      </div>
    </div>
  );
}

export default App;
