import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['k', 'o', 'n', 'd', 'w', 'a', 'n', 'i']
  const jobArray =[
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(()=> {
    
  },[])


  return (
    <>
      <div className='container home-page'>
          <div className='text-zone'>
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br/>
              <span className={`${letterClass} _13`}>I,</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoTitle} alt="fullstack web developer"/>
              <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray}
                idx={15} 
              />
              <br/>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2>Web/ Machine Learning/ Blockchain</h2>
            <Link to="/contact" className='flat-button'>
              CONACT ME
            </Link>
        </div>
        <Logo/>
      </div>

      <Loader type='pacman'/>
    </>
  )
}

export default Home