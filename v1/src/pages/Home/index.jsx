import React from 'react';
import { Layout } from '../../components';
import Subscription from './subscription';
import Projects from './projects';
import Specialized from './specialized';
import Brands from './brands';

const Home = () => {
    return (
        <Layout>
          <div className="bg-wrapper">
          </div>
          <Subscription />
          <Projects />
          <Specialized />
          <Brands />
        </Layout>
    )
}

export default Home