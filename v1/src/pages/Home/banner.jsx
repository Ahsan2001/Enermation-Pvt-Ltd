import React from 'react'
import { ContentWrapper, TextAnimation3 } from '../../components'
import { Link } from 'react-router-dom';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


const Banner = () => {
  return (
    <section>
      <div className="bg-wrapper">
        <ContentWrapper>

          <div className="for-relative">
            <h1 className='banner-heading'>
            Agency – Subscription Model <br /> for fast moving brands.
              {/* <TextAnimation3 heading="Agency – Subscription Model" />
              <TextAnimation3 heading="for fast moving brands." /> */}
            </h1>


            <div className="cta-discover" >
              <Link>Discover Revolve  <span className="custom-arrow"></span></Link>
            </div>

          </div>
        </ContentWrapper>
      </div>
    </section>
  )
}

export default Banner