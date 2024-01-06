import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../../assets/mix/menu-27.svg";
import img2 from "../../assets/mix/menu-35.svg";
import img3 from "../../assets/mix/menu-30.svg";
import img4 from "../../assets/mix/menu-28.svg";
import img5 from "../../assets/mix/menu-12.svg";



const ProductDropdown = () => {
    return (
        <div className="dropdown-main product-drop-down">
            <div className="inner-main-wrap">
                <div className="left-side-main">
                    <h4>Core Products</h4>
                    <ul>
                        <li className='l1'><Link to="/"> ERP</Link></li>
                        <li className='l2'><Link to="/"> CRM</Link></li>
                        <li className='l3'><Link to="/"> Contact Management</Link></li>
                        <li className='l4'><Link to="/"> HRM</Link></li>
                        <li className='l5'><Link to="/"> Recruitment</Link></li>
                        <li className='l6'><Link to="/"> Training</Link></li>
                        <li className='l7'><Link to="/"> Finance</Link></li>
                        <li className='l8'><Link to="/"> Payroll</Link></li>
                        <li className='l9'><Link to="/"> Procurement</Link></li>
                        <li className='l10'><Link to="/"> Asset Management</Link></li>
                        <li className='l11'><Link to="/"> Online Payments</Link></li>
                        <li className='l12'><Link to="/"> Administration</Link></li>
                        <li className='l13'><Link to="/"> Environment Management</Link></li>
                    </ul>
                    <Link to="/" className="view-all-btn">View All Products </Link>
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
                    <div className="box-content b8">
                        <img src={img4} alt="" />
                        <p>Ensure Financial Success through Integrated Axact Finance Solutions.</p>
                    </div>
                    <div className="box-content b9">
                        <img src={img1} alt="" />
                        <p>Increase the efficiency and accuracy of the most complex and time consuming payroll processes.</p>
                    </div>
                    <div className="box-content b10">
                        <img src={img4} alt="" />
                        <p>Automates all the activities related to the organizationtional purchase processes.</p>
                    </div>
                    <div className="box-content b11">
                        <img src={img4} alt="" />
                        <p>Record all your assets in an appropriate manner.</p>
                    </div>
                    <div className="box-content b12">
                        <img src={img4} alt="" />
                        <p>Designed to automate the task of applying payments to invoices or order deposits</p>
                    </div>
                    <div className="box-content b13">
                        <img src={img4} alt="" />
                        <p>A technology platform through which organizations can integrate and coordinate.</p>
                    </div>
                    <div className="box-content b14">
                        <img src={img4} alt="" />
                        <p>Address your regulatory demands in a systematic and cost-effective manner.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDropdown