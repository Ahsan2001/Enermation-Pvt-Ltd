import React from 'react';
import Retrn from "../../assets/home/retrn-circle.svg"
import Ryde from "../../assets/home/ryde-circle.svg"
import { Link } from 'react-router-dom';
import { ContentWrapper } from '../../components';


const Subscription = () => {
  return (
    <section className='second-module-main-wrap'>
          <ContentWrapper>
            <h1 data-aos="fade-up" >
            Explore our industry portfolio and find the solutions you need to run your business better, faster, and with continuous innovation.
            </h1>




          <div className='inner-main-wrapper'>
             <div className="inner-child-first" data-aos="fade-up"  data-aos-delay="500">
                <div className="image-wrap">
                  <img src={Retrn} alt="retrn img" />
                </div>
                <div className="content">
                  <h1>Retrn</h1>
                  <h4>A Web3 Subscription Model designed for Blockchain, DeFi, Crypto, AI companies.</h4>
                  <div className="cta">
                    <Link to="/">DISCOVER RETRN <div className="arrow"></div></Link>
                  </div>
                </div>
             </div>
             <div className="inner-child-second" data-aos="fade-up" data-aos-delay="300">
             <div className="image-wrap">
                  <img src={Ryde} alt="retrn img" />
                </div>
                <div className="content">
                  <h1>Ryde</h1>
                  <h4>A Future-Proof Digital Marketing Subscription created for Modern Commerce Brands.</h4>
                 
                  <div className="cta">
                    <Link to="/">DISCOVER RYDE <div className="arrow"></div></Link>
                  </div>
                </div>
             </div>
          </div>


        </ContentWrapper>
    </section>
  )
}

export default Subscription;