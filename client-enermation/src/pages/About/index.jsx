import React from 'react'
import { ContentWrapper, Layout } from '../../components'
import map from "../../assets/about/map.png";
import inception from "../../assets/about/inception.jpg";


const About = () => {
    return (
        <Layout>
            <section className='hero-main-wrapper about-us'>
                <div className="bg-wrapper">
                    <ContentWrapper>
                        <div className="for-relative">
                            <h1 className='banner-heading' data-aos="fade-up" data-aos-delay="400">
                                About Enermation
                            </h1>
                            <h2>Enermation accomplished a Leading position in the <br />
                                Global IT Industry through its Mission of <br />
                                Winning & Caring
                            </h2>
                        </div>
                    </ContentWrapper>
                </div>
            </section>

            <section className='our-company'>
                <h2>Our Company</h2>
                <p>Enermation, the $20 Billion company, develops problem-solving strategies and uses the latest IT trends to drive growth for businesses all over the world. It has 15 different business units that offer IT solutions including CRM development, Web Design, Application Development, Online Education, Research & Standardization Unit and SAAS. Enermation’s products increase the efficiency of any organization by up to 300%.</p>
            </section>



            <section className='dark-mode-company'>
                <div className="content">
                    <h2>Enermation Global Presence</h2>
                    <p>Enermation contributed USD 355 Million out of 432 Million of the total IT exports of Pakistan in 2014, alone. This amounts to 82% of the total IT exports of Pakistan in 2014 as per EE-1 form reported to State Bank of Pakistan. </p>
                    <p>Later, Enermation moved all of its Business operations abroad leaving only minimum presence in Pakistan. Today, Enermation has a global presence in across 6 continents, 120 countries and 1,300 cities with more than 45,000 Employees and Associates; with a global Sales of USD 7 Billion. Enermation is stronger than ever as a global business entity and this year it will surpass USD 13 Billion in Global Sales.</p>
                    <p>Enermation diverse Business Units offer more than 23 world class products to some of the most prestigious clientele worldwide. It has more than 2 Billion users and a strong customer base of 40 million across the world.  </p>
                    <img src={map} alt="map" />
                </div>
            </section>


            <section className='inception'>
                <ContentWrapper>
                    <h1>Inception</h1>
                    <div className="inner-content-wrapper">
                        <div className="content">
                            <h4>Enermation, World’s Leading IT Company was founded by an IT Revolutionist, Mr. ABC in 1997.</h4>
                            <p>It was the time when Pakistan was still waking up to the potential of the IT industry. Mr ABC  foresight and vision were rewarded in the company’s meticulous rise through the country’s corporate sector and Enermation became Pakistan’s only company worth $20 billion and three times larger than any private sector company of Pakistan in just 15 years.</p>
                            <p>Enermation Mission Comprises of Two Major Aspects; <strong>Winning and Caring.</strong></p>

                        </div>
                        <div className="img">
                            <img src={inception} alt="unity" />
                        </div>
                    </div>
                </ContentWrapper>
            </section>

        </Layout>
    )
}

export default About