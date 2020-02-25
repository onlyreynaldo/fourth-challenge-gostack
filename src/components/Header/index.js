import React, { Component } from 'react';

import facebookLogo from '../../assets/facebook-1.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={facebookLogo} alt="Facebook Challenge"/>
        <strong>Meu Perfil</strong>
      </header>
    );
  }
}
