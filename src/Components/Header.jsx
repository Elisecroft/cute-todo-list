import React from 'react';
import './Header.css';

const Header = () => {
  return(
    <header className="mb-5">
      <img src={`${process.env.PUBLIC_URL}/assets/images/kitty-bubble.png`} alt='kitty bubble'/>
      <h1 className="ml-4 mr-4">Cute To-do List</h1>
      <img src={`${process.env.PUBLIC_URL}/assets/images/kitty-love.png`} alt='kitty love'/>
    </header>
  )
}

export default Header;
