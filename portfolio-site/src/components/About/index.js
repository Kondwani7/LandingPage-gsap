import React, {useEffect, useState} from 'react'
import './index.scss'
import {FaPython,FaJsSquare ,FaGitAlt, FaCss3Alt, FaHtml5, FaReact, FaGit} from 'react-icons/fa'
import {SiTensorflow, SiKubernetes, SiPostgresql, SiDocker, SiDjango} from 'react-icons/si'
import {DiNodejs} from 'react-icons/di'
import Loader from 'react-loaders'
import Animatedletters from '../AnimatedLetters'

const About = () => {
  const [letterClass, setLetterclass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterclass('text-animate-hover')
    })
  })
  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <Animatedletters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
              idex={15}
            />
          </h1>
          <p>
            I'm very ambitious fullstack web developer and ML engineer looking for a role in
            established Tech company with the opportunity to work with the latest
            technologies on challenging and diverse projects.  
          </p>
           <p align="LEFT">
            I'm autodidact, kind, and very amiable to many of my collegues and friends.
          </p>
        </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FaReact color="#03adfc"/>
            </div>
            <div className='face2'>
              <DiNodejs color="#06cf3c"/>
            </div>
            <div className='face3'>
              <SiPostgresql color="#085d9e"/>
            </div>
            <div className='face4'>
              <SiDjango color="#085212"/>
            </div>
            <div className='face5'>
              <SiTensorflow color="#e8811a"/>
            </div>
            <div className='face6'>
              <FaGit color="#e34a09"/>
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman'/>
    </>
  )
}

export default About