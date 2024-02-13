import React, { useState } from 'react';
import ContentWrapper from '../ContentWrapper';
import { Link } from 'react-router-dom';

const Contact = () => {


  const [ bg, setBg ] = useState("one");
  const [left, setLeft] = useState(12);

  const setClass = (classname, value) => {
    setBg(classname);
    setLeft(value);
    console.log(classname);
  }




  return (
    <section className={`contact-module-main-wrap ${bg}`}>
      <ContentWrapper>
          <div className="content">
              <h1>Deep-rooted on <span>the West Coast.</span> </h1>
              <p>From the beach to the mountains, this is where we dwell, design & disrupt.</p>
              <Link to="/about">MORE ABOUT US  <span className="custom-arrow"></span></Link>

              <ul className='custom-changes '>
                <li><button onClick={() => setClass("one", 12)}>SAN FRANCISCO</button></li>
                <li><button onClick={() => setClass("two", 38)}>LOS ANGELES</button></li>
                <li><button onClick={() => setClass("three", 62)}>SEATTLE</button></li>
                <li><button onClick={() => setClass("four", 86)}>VANCOUVER</button></li>
              </ul>
             
              <span className="movingBg" style={{ left: `${left}%` }} />

          </div>
      </ContentWrapper>
    </section>
  )
}

export default Contact