import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../../assets/mix/menu-27.svg";
import img2 from "../../assets/mix/menu-35.svg";
import img3 from "../../assets/mix/menu-30.svg";
import img4 from "../../assets/mix/menu-28.svg";
import img5 from "../../assets/mix/menu-12.svg";

const IndustriesDropdown = () => {
  return (
    <div className="dropdown-main industries-drop-down">
            <div className="inner-main-wrap">
                <div className="left-side-main">
                    <h4>Industries</h4>
                    <ul>
                        <li className='l1'><Link to="/"> Education</Link></li>
                        <li className='l2'><Link to="/"> Healthcare</Link></li>
                        <li className='l3'><Link to="/"> Transportation & Logistics</Link></li>
                        <li className='l4'><Link to="/"> Defense & Security</Link></li>
                        <li className='l5'><Link to="/"> Hospitality And Leisure</Link></li>
                        <li className='l6'><Link to="/"> Media Management System</Link></li>
                        <li className='l7'><Link to="/"> Retail</Link></li>
                    </ul>
                    <Link to="/" className="view-all-btn">View All Industries </Link>
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
                    <div className="box-content b4">
                        <img src={img4} alt="" />
                        <p>Make your human resource management processes hassle free.</p>
                    </div>
                    <div className="box-content b5">
                        <img src={img5} alt="" />
                        <p>Address your regulatory demands in a systematic and cost-effective manner.</p>
                    </div>
                    <div className="box-content b6">
                        <img src={img5} alt="" />
                        <p>xact has thorough and comprehensive training software that facilitates automated trainings for every
                            joinee enabling them to learn and understand the processes according to their relevant job duties.</p>
                    </div>
                    <div className="box-content b7">
                        <img src={img1} alt="" />
                        <p>joinee enabling them to learn and understand the processes</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default IndustriesDropdown