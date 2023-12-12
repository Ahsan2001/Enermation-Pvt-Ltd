// ScrollingTextAnimation.js
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TextAnimation3 = (props) => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.offsetTop;
      const scrollY = window.scrollY;

      if (scrollY > containerTop) {
        // Play animation when the container is in view
        controls.start({ opacity: 1, y: 0 });
      } else {
        // Reset animation when the container is out of view
        controls.start({ opacity: 0, y: 50 });
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', padding: '10px 0px' }}
    >
        {props.heading}
    </motion.div>
  );
};

export default TextAnimation3;
