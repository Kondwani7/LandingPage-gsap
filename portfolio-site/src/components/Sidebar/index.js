import React from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BsLinkedin, BsGithub,BsYoutube, BsSkype} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import './index.scss'
import {Link, NavLink} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to="/">
        <img src={LogoS} alt="logo"/>
        <img src={LogoSubtitle} alt="slobodoan"/>
      </Link>
    </div> 
  )
}

export default Sidebar