import React from 'react'
import { ContentWrapper, Layout } from '../../components'

const Contact = () => {
    return (
        <Layout>
            <section className='hero-main-wrapper contact'>
                <div className="bg-wrapper">
                    <ContentWrapper>
                        <div className="for-relative">
                            <h1 className='banner-heading' data-aos="fade-up" data-aos-delay="400">
                                Contact with us
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

export default Contact