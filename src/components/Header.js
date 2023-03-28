import React from 'react';
//images
import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className="cointainer mx-auto">
      <div className='flex justify-between items-center'>
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        <button className='btn btn-sm'>Crypto? I'm in!</button>
      </div>
    </div>
    </header>;
};

export default Header;
