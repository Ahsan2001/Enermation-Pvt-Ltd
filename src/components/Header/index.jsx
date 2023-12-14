import React from 'react';
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import WaveEffect from './wave';
import ContentWrapper from '../ContentWrapper';
import Test from '../Test';
// import TextAnimation from '../Test/index2';
// import TextAnimation3 from '../Test/index3';
import ProductDropdown from './product-dropdown';
import IndustriesDropdown from './industries-dropdown';
import BusinessDropdown from './business-dropdown';
import PlatformsDropdown from './platforms-dropdown';
import logo from "../../assets/home/logo.png";



const Header = () => {

  return (
    <>

      {/* <TextAnimation /> */}
      <header>
        <div className="sticky-header">
          <ContentWrapper>
            <nav>
              <div className='logo-main-wrap'>
                <img src={logo} alt="ahsan" />
                {/* <h3>Enermation</h3> */}
              </div>
              <div className='main-menu-wrap'>
                <ul className='header-menu'>
                  <li className='product-header'><Link to="/product">PRODUCTS </Link>
                    <ProductDropdown />
                  </li>
                  <li className='industries-header'><Link to="/">INDUSTRIES</Link>
                    <IndustriesDropdown />
                  </li>
                  <li className='platforms-header'><Link to="/">PLATFORMS</Link>
                    <PlatformsDropdown />
                  </li>
                  <li className='bussiness-header'><Link to="/">BUSINESS UNIT</Link>
                    <BusinessDropdown />
                  </li>
                  <li><Link to="/">PARTNER</Link>

                    <div className=""></div>
                  </li>
                  <li><Link to="/">ABOUT</Link>
                    <div className=""></div>

                  </li>
                  <li><Link to="/">CONTACT <CgArrowLongRight /></Link>
                  </li>
                </ul>
              </div>
            </nav>
            <h2>
              <Test item={"Subscription—Agency driving the future of tech"} />
              <br />
              <Test item={"and commerce brands across platforms and places."} />
            </h2>

          </ContentWrapper>
        </div>
        <WaveEffect />
      </header>
    </>
  )
}

export default Header;