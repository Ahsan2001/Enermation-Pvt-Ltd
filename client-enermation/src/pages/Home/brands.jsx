import React from 'react';
import { ContentWrapper, Testimonial } from '../../components';
import l1 from "../../assets/brands/1.svg";
import l2 from "../../assets/brands/2.svg";
import l3 from "../../assets/brands/3.svg";
import l4 from "../../assets/brands/4.svg";
import l5 from "../../assets/brands/5.svg";
import l6 from "../../assets/brands/6.svg";


const Brands = () => {
    return (
        <section className='fourth-module-main-wrap'>
            <ContentWrapper>
                <h1>We make waves with fast-moving & fluid brands.</h1>
                <div className="logo-main-wraps">
                    <img src={l1} alt="logo1" />
                    <img src={l2} alt="logo2" />
                    <img src={l3} alt="logo3" />
                    <img src={l4} alt="logo4" />
                    <img src={l5} alt="logo5" />
                    <img src={l6} alt="logo6" />
                </div>
                <Testimonial />
            </ContentWrapper>

        </section>
    )
}

export default Brands