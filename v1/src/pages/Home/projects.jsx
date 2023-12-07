import React from 'react';
import { ContentWrapper } from '../../components';
import item1 from "../../assets/projects/1.jpg";
import item2 from "../../assets/projects/2.jpg";
import item3 from "../../assets/projects/3.jpg";
import item4 from "../../assets/projects/4.jpg";

const Projects = () => {
    return (
        <section className='third-module-main-wrap'>
            <ContentWrapper>
                <h1 data-aos="fade-up">
                    We guide game-changing Tech, AI & Commerce Brands, across platforms & places, through agile design & digital experience. We make waves™.
                </h1>
                <div className="inner-main-wrap">
                    <div className="items-main" data-aos="fade-up"  data-aos-delay="300">
                        <img src={item1} alt="item1" />
                        <h3>Shift Markets — Become Crypto Capable.</h3>
                        <p>Websites & Digital Platforms, Web3 Experience Design</p>
                    </div>
                    <div className="items-main" data-aos="fade-up" >
                        <img src={item2} alt="item1" />
                        <h3>Cloud Apartments — The Future Of Apartments.</h3>
                        <p>Branding & Identity, Websites & Digital Platforms</p>
                    </div>
                    <div className="items-main" data-aos="fade-up"  data-aos-delay="300">
                        <img src={item3} alt="item1" />
                        <h3>TakeUp — Adaptive Hotel Pricing Platform.</h3>
                        <p>Branding & Identity, Websites & Digital Platforms</p>
                    </div>
                    <div className="items-main" data-aos="fade-up"  data-aos-delay="200">
                        <img src={item4} alt="item1" />
                        <h3>Highline — Revolutionizing The World Of Credit.</h3>
                        <p>Branding & Identity, Websites & Digital Platforms</p>
                    </div>
                </div>
                <div className="hover-effects">
                    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">
                        <defs>
                            <filter id="waterTexture" >
                                <feTurbulence result="undulation" numOctaves="1" baseFrequency="0" seed="0" type="turbulence">

                                    <animate
                                        attributeName="baseFrequency"
                                        dur="15s"
                                        keySplines="
                                0.5 0 0.5 1;
                                0.5 0 0.5 1"
                                        keyTimes="
                                0;
                                0.5;
                                1"
                                        calcMode="spline"
                                        values="
                                0.005,0.009; 
                                0.009,0.005; 
                                0.005,0.009"
                                        repeatCount="indefinite" />

                                </feTurbulence>
                                <feColorMatrix
                                    in="undulation"
                                    type="hueRotate"
                                    values="180" >

                                    <animate
                                        attributeName="values"
                                        dur="1s"
                                        from="0"
                                        to="360"
                                        repeatCount="indefinite" />

                                </feColorMatrix>
                                <feColorMatrix in="dist" result="circulation" type="matrix"
                               values="2 0 0 0 1
                                       2 0 0 0 1
                                       2 0 0 0 1
                                       1 0 0 0 0   
                                       "/>
                                <feDisplacementMap in="SourceGraphic" in2="circulation" scale="2" result="dist" />
                                <feDisplacementMap in="dist" in2="undulation" scale="2" result="woah" />
                            </filter>
                        </defs>
                    </svg>
                 </div>
            </ContentWrapper>
        </section>
    )
}

export default Projects