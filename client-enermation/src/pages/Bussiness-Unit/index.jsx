import React from 'react'
import { ContentWrapper, Layout } from '../../components'

const BusinessUnit = () => {
    return (
        <Layout>
            <section className='hero-main-wrapper bussiness-unit'>
                <div className="bg-wrapper">
                    <ContentWrapper>
                        <div className="for-relative">
                            <h1 className='banner-heading' data-aos="fade-up" data-aos-delay="400">
                                Enermation Business Units
                            </h1>
                            <h2>Known for powering small and medium <br />
                                size businesses
                            </h2>
                        </div>
                    </ContentWrapper>
                </div>
            </section>
        </Layout>
    )
}

export default BusinessUnit