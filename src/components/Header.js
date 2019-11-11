import React, { Component } from 'react';
import logo from '../assets/logo_facebook.svg';

class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <div className="content">
          <img src={logo} alt="Logo" />
          <p>Meu perfil</p>
        </div>
      </header>

    )
  }
}

export default Header;