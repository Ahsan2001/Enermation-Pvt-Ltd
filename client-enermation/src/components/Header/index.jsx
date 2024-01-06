import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import WaveEffect from './wave';
import ContentWrapper from '../ContentWrapper';
// import Test from '../Test';
// import TextAnimation from '../Test/index2';
// import TextAnimation3 from '../Test/index3';
// import ProductDropdown from './product-dropdown';
import IndustriesDropdown from './industries-dropdown';
import BusinessDropdown from './business-dropdown';
import PlatformsDropdown from './platforms-dropdown';
import logo from "../../assets/home/logo.svg";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";


const Header = () => {


  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);



  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);





  const openMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };




  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);





  return (
    <>

      {/* <TextAnimation /> */}
      <header>
        <div className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
          <ContentWrapper>
            <nav>
              <div className='logo-main-wrap' onClick={() => navigate("/")}>
                <img src={logo} alt="ahsan" />
                {/* <h3>Enermation</h3> */}
              </div>
              <div className='main-menu-wrap'>
                <ul className='header-menu'>
                  {/* <li className='product-header'><Link to="/product">PRODUCTS </Link>
                    <ProductDropdown />
                  </li> */}
                  <li className='industries-header'><Link to="/product">INDUSTRIES</Link>
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

                <div className="mobileMenuItems">
                  {mobileMenu ? (
                    <>
                    <VscChromeClose onClick={openMobileMenu} />

                    <div className="mobile-main-main-wrap">
                      <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">INDUSTRIES</a></li>
                        <li><a href="/">PLATFORMS</a></li>
                        <li><a href="/">BUSINESS UNIT</a></li>
                        <li><a href="/">PARTNER</a></li>
                        <li><a href="/">ABOUT</a></li>
                        <li><a href="/">CONTACT</a></li>
                      </ul>
                    </div>
                    </>
                  ) : (
                    <SlMenu onClick={openMobileMenu} />
                  )}
                </div>
              </div>
            </nav>
          </ContentWrapper>
        </div>

        {/* header heading  */}
        <div className="header-heading-main">
          <ContentWrapper>
          <h2  data-aos="fade-left" data-aos-delay="300">
             Subscription—Agency driving the future of tech and commerce brands across platforms and places. 
          </h2>
          </ContentWrapper>

        </div>

        {/* wave line in header  */}
        <WaveEffect />
      </header>
    </>
  )
}

export default Header;