import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './HeaderStyles.scss'
import Media from 'react-media'
import { HamburgerIcon } from 'components/common/Icons/HamburgerIcon/HamburgerIcon'

const Header: React.FC = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false)

  const toggleMobileMenu = (): void => {
    setMobileMenuActive(!mobileMenuActive)
  }

  return (
    <header className='header'>
      <div className='header__main'>
        <Link className='header__main__title' to={'/'}>
          {'SpaceX Missions'}
        </Link>
        <Media
          queries={{
            mobile: '(max-width: 480px)',
            desktop: '(min-width: 768px)'
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.desktop && (
                <nav className='header__main__nav'>
                  <Link to={'/'}>{'MISSIONS'}</Link>
                  {'/'}
                  <Link to={'/about'}>{'ABOUT'}</Link>
                </nav>
              )}
              {matches.mobile && (
                <button className='header__main__mobile-button' onClick={toggleMobileMenu}>
                  <HamburgerIcon />
                </button>
              )}
            </Fragment>
          )}
        </Media>
      </div>
      <Media
        queries={{
          mobile: '(max-width: 480px)'
        }}
      >
        {(matches) =>
          mobileMenuActive &&
          matches.mobile && (
            <nav className='header__mobile-menu'>
              <Link to={'/'}>{'MISSIONS'}</Link>
              <Link to={'/about'}>{'ABOUT'}</Link>
            </nav>
          )
        }
      </Media>
    </header>
  )
}

export default Header
