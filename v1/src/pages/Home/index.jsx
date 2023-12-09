import React from 'react';
import { Contact, Layout } from '../../components';
import Subscription from './subscription';
import Projects from './projects';
import Specialized from './specialized';
import Brands from './brands';
import NewsAndInsights from './news-&-insight';

const Home = () => {
    return (
        <Layout>
          <div className="bg-wrapper">
          </div>
          <Subscription />
          <Projects />
          <Specialized />
          <Brands />
          <Contact />
          <NewsAndInsights />
        </Layout>
    )
}

export default Home