import React from 'react'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <h1 className="header__logo-name">ANIME APP</h1>
    </header>
  )
}

export default Header
