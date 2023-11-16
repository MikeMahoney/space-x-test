import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderStyles.scss'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <Link className='header__title' to={'/'}>
        {'SpaceX Missions'}
      </Link>
      <nav className='header__nav'>
        <Link to={'/'}>{'MISSIONS'}</Link>
        {'/'}
        <Link to={'/about'}>{'ABOUT'}</Link>
      </nav>
    </header>
  )
}

export default Header
