import React from 'react'
import ContentWrapper from '../ContentWrapper'
import { Link } from 'react-router-dom'
import Wave from 'react-wavify'

const Footer = () => {
  return (
    <footer>

      <ContentWrapper>

        <div className="footer-top-wrapper">
          <h1>Let’s make <span>waves.</span> </h1>
          <Link to="/">START A PARTNERSHIP <span className='custom-arrow'></span></Link>
        </div>

        <div className="for-padding"></div>

        <div className="wave-position-set">

          <Wave fill='#181819'
            paused={false}
            style={{ display: 'flex' }}
            options={{
              height: 10,
              amplitude: 5,
              speed: 0.45,
              points: 3
            }}
          />
        </div>

        <div className="footer-main-wrapper">

          <div className="left-side-wrapper">
            <h2>Company Logo</h2>
            <p>© 2023 RNO1, LLC livethebrandTM <br /> Made on the West Coast </p>
          </div>
          <div className="right-side-wrapper">
            <ul>
              <li>
                <div className="content">
                  <h1> SF.</h1>
                  <a href="tel:+">650.268.9783</a>
                  <a href="mailto:">sf@rno1.com</a>
                  <a href="http://">Map</a>
                </div>
              </li>
              <li>
                <div className="content">
                  <h1> LA.</h1>
                  <a href="tel:+">310.861.5885</a>
                  <a href="mailto:">la@rno1.com</a>
                  <a href="http://">Map</a>
                </div>
              </li>
              <li>
                <div className="content">
                  <h1> SEA.</h1>
                  <a href="tel:+">206.414.7467</a>
                  <a href="mailto:">sea@rno1.com</a>
                  <a href="http://">Map</a>
                </div>
              </li>
              <li>
                <div className="content">
                  <h1> VAN.</h1>
                  <a href="tel:+">604.357.4742</a>
                  <a href="mailto:">van@rno1.com</a>
                  <a href="http://">Map</a>
                </div>
              </li>
              <li>
                <div className="content">
                  <h1> VLN.</h1>
                  <a href="tel:+">370.614.79961</a>
                  <a href="mailto:">vln@rno1.com</a>
                  <a href="http://">Map</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-wrapper">
          <div className="term-and-condition">
            <pre><Link to="/">Privacy Policy</Link>  |  <Link to="/">Terms of Use</Link></pre>
          </div>
          <div className="follow-us">
              <ul>
                <li>Follow us:</li>
                <li><Link to="/">Twitter</Link></li>
                <li><Link to="/">Facebook</Link></li>
                <li><Link to="/">Instagram</Link></li>
                <li><Link to="/">Medium</Link></li>
                <li><Link to="/">LinkedIn</Link></li>
              </ul>
          </div>
        </div>

      </ContentWrapper>

    </footer>
  )
}

export default Footer