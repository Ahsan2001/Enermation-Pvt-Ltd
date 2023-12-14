import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import l1 from "../../assets/brands/1.svg";
import l2 from "../../assets/brands/2.svg";
import l3 from "../../assets/brands/3.svg";

import { CgArrowLongRight } from "react-icons/cg";
import { CgArrowLongLeft } from "react-icons/cg";


const Testimonial = () => {

    // Custom arrow components
    const CustomLeftArrow = ({ onClick }) => (
        <div className="custom-arrow-left" onClick={onClick}>
            <CgArrowLongLeft />
        </div>
    );

    const CustomRightArrow = ({ onClick }) => (
        <div className="custom-arrow-right" onClick={onClick}>
            <CgArrowLongRight />
        </div>
    );


    return (
        <div className='custom-slider-main-wrap'>
            <Carousel swipeable={true} infiniteLoop={true}
                showIndicators={false} showThumbs={false}
                transitionMode="fade"    emulateTouch={true}
                renderArrowPrev={(onClickHandler) => <CustomLeftArrow onClick={onClickHandler} /> }
                renderArrowNext={(onClickHandler) => <CustomRightArrow onClick={onClickHandler} /> }
            >
                <div className='item-main-wrap'>
                    <div className="image-box">
                        <img src={l1} alt="a1"/>
                    </div>
                    <div className="content-box">
                        <p>"RNO1's Design-first mindset was so in line with our platform goals at Wand, we were beyond excited to see them execute on our vision. The team has an amazing affinity for design and over-delivers on CX (Customer Experience)!"</p>
                        <h6>Ben Anderson, Founder</h6>
                    </div>
                </div>
                <div className='item-main-wrap'>
                    <div className="image-box">
                        <img src={l2} alt="a1"/>
                    </div>
                    <div className="content-box">
                        <p>"Working with RNO1 has been a pleasure! Our site was buzzing with happy buyers for our appearance on the show 'Shark Tank', and we're now building out our fully re-vamped eCommerce experience!"</p>
                        <h6>Ben Anderson, Founder</h6>
                    </div>
                </div>
                <div className='item-main-wrap'>
                    <div className="image-box">
                        <img src={l3} alt="a1"/>
                    </div>
                    <div className="content-box">
                        <p>"RNO1's Design-first mindset was so in line with our platform goals at Wand, we were beyond excited to see them execute on our vision. The team has an amazing affinity for design and over-delivers on CX (Customer Experience)!"</p>
                        <h6>Ben Anderson, Founder</h6>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Testimonial