import React from 'react';
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import WaveEffect from './wave';
import ContentWrapper from '../ContentWrapper';



const Header = () => {

  return (
    <>
      <header>
        <ContentWrapper>
          <nav>
            <div className='logo-main-wrap'>
              {/* <img src='' alt="ahsan" /> */}
              <h3>Company logo</h3>
            </div>
            <div className='main-menu-wrap'>
              <ul>
                <li><Link to="/product">PRODUCTS</Link></li>
                <li><Link to="/">INDUSTRIES</Link></li>
                <li><Link to="/">PLATFORMS</Link></li>
                <li><Link to="/">BUSINESS UNIT</Link></li>
                <li><Link to="/">PARTNER</Link></li>
                <li><Link to="/">ABOUT</Link></li>
                <li><Link to="/">CONTACT <CgArrowLongRight /></Link></li>
              </ul>
            </div>
          </nav>

          <h2>West Coast Brandmakers <br/> with a global edge.</h2>
        </ContentWrapper>
         <WaveEffect />
      </header>
    </>
  )
}

export default Header;