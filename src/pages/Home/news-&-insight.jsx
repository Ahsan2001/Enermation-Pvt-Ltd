import React from 'react';
import { ContentWrapper } from "../../components";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import l1 from "../../assets/news/1.jpg";
import l2 from "../../assets/news/2.jpg";
import l3 from "../../assets/news/3.jpg";
import { CgArrowLongRight } from "react-icons/cg";
import { CgArrowLongLeft } from "react-icons/cg";


const NewsAndInsights = () => {
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
        <section className='six-module-main-wrap'>
            <ContentWrapper>
                <h2>News & Insights</h2>
                <div className='custom-slider-main-wrap'>
                    <Carousel swipeable={true} infiniteLoop={true}
                        showIndicators={false} showThumbs={false}
                        transitionMode="fade" emulateTouch={true}
                        renderArrowPrev={(onClickHandler) => <CustomLeftArrow onClick={onClickHandler} />}
                        renderArrowNext={(onClickHandler) => <CustomRightArrow onClick={onClickHandler} />}
                    >
                        <div className="item">
                            <div className='item-main-wrap'>
                                <div className="image-box">
                                    <img src={l1} alt="a1"/>
                                </div>
                                <div className="content-box">
                                    <h6>Client Feature | Oct 10</h6>
                                    <p>Hedonova Partners with RNO1 as Global Experience Design Agency.</p>
                                </div>
                            </div>
                            <div className='item-main-wrap'>
                                <div className="image-box">
                                    <img src={l2} alt="a1"/>
                                </div>
                                <div className="content-box">
                                    <h6>Client Feature | Oct 10</h6>
                                    <p>Hedonova Partners with RNO1 as Global Experience Design Agency.</p>
                                </div>
                            </div>
                            <div className='item-main-wrap'>
                                <div className="image-box">
                                    <img src={l3} alt="a1"/>
                                </div>
                                <div className="content-box">
                                    <h6>Client Feature | Oct 10</h6>
                                    <p>Hedonova Partners with RNO1 as Global Experience Design Agency.</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className='item-main-wrap'>
                                <div className="image-box">
                                    <img src={l1} alt="a1"/>
                                </div>
                                <div className="content-box">
                                    <h6>Client Feature | Oct 10</h6>
                                    <p>Hedonova Partners with RNO1 as Global Experience Design Agency.</p>
                                </div>
                            </div>
                            <div className='item-main-wrap'>
                                <div className="image-box">
                                    <img src={l2} alt="a1"/>
                                </div>
                                <div className="content-box">
                                    <h6>Client Feature | Oct 10</h6>
                                    <p>Hedonova Partners with RNO1 as Global Experience Design Agency.</p>
                                </div>
                            </div>
                            <div className='item-main-wrap'>
                                <div className="image-box">
                                    <img src={l3} alt="a1"/>
                                </div>
                                <div className="content-box">
                                    <h6>Client Feature | Oct 10</h6>
                                    <p>Hedonova Partners with RNO1 as Global Experience Design Agency.</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className='item-main-wrap'>
                                <div className="image-box">
                                    <img src={l1} alt="a1"/>
                                </div>
                                <div className="content-box">
                                    <h6>Client Feature | Oct 10</h6>
                                    <p>Hedonova Partners with RNO1 as Global Experience Design Agency.</p>
                                </div>
                            </div>
                            <div className='item-main-wrap'>
                                <div className="image-box">
                                    <img src={l2} alt="a1"/>
                                </div>
                                <div className="content-box">
                                    <h6>Client Feature | Oct 10</h6>
                                    <p>Hedonova Partners with RNO1 as Global Experience Design Agency.</p>
                                </div>
                            </div>
                            <div className='item-main-wrap'>
                                <div className="image-box">
                                    <img src={l3} alt="a1"/>
                                </div>
                                <div className="content-box">
                                    <h6>Client Feature | Oct 10</h6>
                                    <p>Hedonova Partners with RNO1 as Global Experience Design Agency.</p>
                                </div>
                            </div>
                        </div>

                    </Carousel>
                </div>
            </ContentWrapper>
        </section>
    )
}

export default NewsAndInsights