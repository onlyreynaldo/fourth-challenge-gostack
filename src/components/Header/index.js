import React, { Component } from 'react';

import facebookLogo from '../../assets/facebook-1.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={facebookLogo} alt="Facebook Challenge"/>
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}
