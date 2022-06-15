import React from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BsLinkedin, BsGithub,BsYoutube, BsSkype} from 'react-icons/bs'
import {AiFillFacebook, AiFillHome} from 'react-icons/ai'
import {FaUserAlt, FaSuitcase} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {FcContacts} from 'react-icons/fc'
import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import {AiOutlineTwitter} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to="/">
        <img src={LogoS} alt="logo"/>
        <img src={LogoSubtitle} alt="slobodoan"/>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <AiFillHome color="#4d4d4e"/>
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FaUserAlt color="#4d4d4e"/>
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FaSuitcase color="#4d4d4e"/>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FcContacts color="#4d4d4e"/>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/kondwani-ngulube-4489ba174/'
            target='blank'
            rel='noreferrer'
          >
            <BsLinkedin color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/kondwani7'
            target='blank'
            rel='noreferrer'
          >
            <BsGithub color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/Kondwani_G'
            target='blank'
            rel='noreferrer'
          >
            <AiOutlineTwitter color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/kondwani_g_ngulube/'
            target='blank'
            rel='noreferrer'
          >
            <GrInstagram color="#4d4d4e"/>
          </a>
        </li>
      </ul>
    </div> 
  )
}

export default Sidebar