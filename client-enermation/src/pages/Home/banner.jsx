import React from 'react'
import { ContentWrapper } from '../../components'
import { Link } from 'react-router-dom';
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


const Banner = () => {
  return (
    <section className='hero-main-wrapper'>
      {/* <video resizemode={"cover"}
          style={{
            // aspectRatio: 1,
            width: "100%",
          }} autoPlay muted loop>
        <source src="./bg.mp4" type="video/mp4" />
      </video> */}
      <div className="bg-wrapper">
        <ContentWrapper>
          <div className="for-relative">
            <h1 className='banner-heading' data-aos="fade-up" data-aos-delay="400">
            One of the Leading IT Company <br /> Globally
              {/* <TextAnimation3 heading="Agency – Subscription Model" />
              <TextAnimation3 heading="for fast moving brands." /> */}
            </h1>
            <div className="cta-discover" data-aos="fade-up" data-aos-delay="500">
              <Link to="/bussiness-unit">Discover Enermation  <span className="custom-arrow"></span></Link>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  )
}

export default Banner