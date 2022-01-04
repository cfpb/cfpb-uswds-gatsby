import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Cards from '../components/cards';
import Highlights from '../components/highlights';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Highlights />
    <Cards />
    <Tagline />
  </Layout>
);

export default IndexPage;
