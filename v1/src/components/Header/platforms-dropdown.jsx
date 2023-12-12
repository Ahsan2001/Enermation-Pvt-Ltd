import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../../assets/mix/menu-27.svg";
import img2 from "../../assets/mix/menu-35.svg";
import img3 from "../../assets/mix/menu-30.svg";

const PlatformsDropdown = () => {
  return (
    <div className="dropdown-main platforms-drop-down">
            <div className="inner-main-wrap">
                <div className="left-side-main">
                    <h4>Platforms</h4>
                    <ul>
                        <li className='l1'><Link to="/"> Mobile</Link></li>
                        <li className='l2'><Link to="/"> Web</Link></li>
                        <li className='l3'><Link to="/"> Desktop</Link></li>
                    </ul>
                    <Link to="/" className="view-all-btn">View All Platforms </Link>
                </div>
                <div className="right-side-main">
                    <div className="box-content b1">
                        <img src={img1} alt="" />
                        <p>Get prepared for escalated performance results.</p>
                    </div>
                    <div className="box-content b2">
                        <img src={img2} alt="" />
                        <p>Axact’s Customer Relationship Management (CRM) is ideal for managing interactions with current and future customers.</p>
                    </div>
                    <div className="box-content b3">
                        <img src={img3} alt="" />
                        <p>Empower your workforce to deliver the 'next level' services.</p>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default PlatformsDropdown