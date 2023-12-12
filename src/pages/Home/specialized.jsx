import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContentWrapper } from '../../components'

const Specialized = () => {


  const [bg, setBg] = useState("default");

  // Function to handle mouseleave event and reset the bg state to default
  const setDefault = () =>  setBg("default");
  // const setNew = (new) => setBg(new);
  const setNew = (getClass) => setBg(getClass);

  return (
   <section className={`specialzed ${bg}`}>
      <ContentWrapper>
          <h5>WE SPECIALIZE IN</h5>
            <ul>
              <li onMouseOver={() => setNew("branding")}  onMouseLeave={setDefault}><Link to="/">Branding & Identity <span></span></Link></li>
              <li onMouseOver={() => setNew("website")}  onMouseLeave={setDefault}><Link to="/">Websites & Digital Platforms <span></span></Link></li>
              <li onMouseOver={() => setNew("web3")}  onMouseLeave={setDefault}><Link to="/">Web3 Experience Design <span></span></Link></li>
              <li onMouseOver={() => setNew("eCommerce")}  onMouseLeave={setDefault}><Link to="/">eCommerce Experiences <span></span></Link></li>
              <li onMouseOver={() => setNew("VR")}  onMouseLeave={setDefault}><Link to="/">VR & AR Environments <span></span></Link></li>
            </ul>
      </ContentWrapper>
   </section>
  )
}

export default Specialized