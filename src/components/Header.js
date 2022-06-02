import React from 'react';
import CatAnimation from '../images/cat-astronaut-animate.svg';

class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="https://storyset.com/space" target='_blank' rel="noreferrer">
          <img src={CatAnimation} alt="Space Cat" className='title-img' />
        </a>
        <span className='text-focus-in'>solar<strong className='strong'>system</strong></span>
      </header>
    );
  }
}

export default Header;
