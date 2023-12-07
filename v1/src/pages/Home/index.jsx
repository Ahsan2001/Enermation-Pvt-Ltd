import React, { useEffect } from 'react';
import { Layout } from '../../components';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Subscription from './subscription';
import Projects from './projects';
import Specialized from './specialized';

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can customize the duration and other options
  }, []);

    return (
        <Layout>
          <div className="bg-wrapper">
            <h1 className='ahsan' data-aos="zoom-in" data-aos-delay="300">Home page testing</h1>
          </div>
          <Subscription />
          <Projects />
          <Specialized />
        </Layout>
    )
}

export default Home