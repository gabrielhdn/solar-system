import React from 'react';
import Cat from '../images/catAstronaut.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="https://storyset.com/space" target='_blank'><img src={Cat} className='title-img' /></a>
        <span className='text-focus-in'>solar<strong className='strong'>system</strong></span>
      </header>
    );
  }
}

export default Header;
