import React, {useEffect, useState, useRef} from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm(
      'gmail',
      'your-service-id',
      form.current,
      '######token'
    ).then(
      () => {
        alert("message sent")
        window.location.reload(false)
      },
      () => {
        alert('failed to send message')
      }
    )
  }
  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C','o','n','t','a','c','t',' ','m','e']}
              idx={15}
            />
          </h1>
          <p>
              I am interested in freelance opportunities - especially ambitious or
              large projects. However, if you have other request or question,
              don't hesitate to contact me using below form either.
            </p>
            <div className='contact-form'>
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className='half'>
                    <input placeholder='Name' type="text" required name="name"/>
                  </li>
                  <li className='half'>
                    <input placeholder='Email' type="email" name="email" required/>
                  </li>
                  <li>
                    <input placeholder='Subject' type="text" name="subject" required/>
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
        </div>
        <div className='info-map'>
          Kitwe
          <br/>
          Zambia
          <br/>
          House No 123 street X <br/>
          Road X <br/>
          <span>kondwanigideon.ngulube@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="yourlocation" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Kondwani lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman'/>
    </>
    
  )
}

export default Contact