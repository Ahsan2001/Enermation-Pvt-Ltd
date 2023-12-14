import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn,
   MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


const TextAnimation = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  // const FadeUp = batch(Fade(), Move(), Sticky());
  return (

    // <div className="customBg">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>Welcome ✨</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>Enermation Pvt Ltd✨</span>
          </Animator>
        </ScrollPage>

      </ScrollContainer>
    // </div>
  );
};

export default TextAnimation;
