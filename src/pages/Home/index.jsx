import React from 'react';
import { Contact, Layout, TextAnimation } from '../../components';
import Subscription from './subscription';
import Projects from './projects';
import Specialized from './specialized';
import Brands from './brands';
import NewsAndInsights from './news-&-insight';
import Banner from './banner';



const Home = () => {
  return (
    <>

      {/* <TextAnimation /> */}
      <Layout>
        <Banner />
        <Subscription />
        <Projects />
        <Specialized />
        <Brands />
        <Contact />
        <NewsAndInsights />


      </Layout>
    </>

  )
}

export default Home