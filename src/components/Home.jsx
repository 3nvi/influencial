import React from 'react';
import { Layout, Grid, Cell, Navigation, Header } from 'react-mdl';
import { Link } from 'react-router';

import Map from './map/index';
import Filters from './filters/index';
import InfluencerList from '../containers/influencers/list';

function Home() {
  return (
    <Layout className="container" style={{ position: 'relative' }}>
      <Header title="InfluenCial" style={{ color: 'white' }}>
        <Navigation>
          <Link to="/">Home</Link>
        </Navigation>
      </Header>
      <Grid>
        <Cell col={12}>
          <Map />
        </Cell>
        <Cell col={4}>
          <Filters />
        </Cell>
        <Cell col={8}>
          <InfluencerList />
        </Cell>
      </Grid>
    </Layout>
  );
}

export default Home;
