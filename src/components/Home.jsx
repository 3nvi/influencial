import React from 'react';
import { Layout, Grid, Cell, Navigation, Header } from 'react-mdl';
import { Link } from 'react-router';
import ClearFilters from '../containers/filters/clear_filters_button';

import Map from './map/index';
import AdvancedFilters from './filters/index';
import InfluencerList from '../containers/influencers/list';
import FreeSearchFilter from '../containers/filters/free_search_filter';

function Home() {
  return (
    <Layout className="container" style={{ position: 'relative' }}>
      <Header title="InfluenCial" style={{ color: 'white' }}>
        <Navigation>
          <Link to="/">Home</Link>
        </Navigation>
      </Header>
      <Grid>
        <ClearFilters />
        <Cell col={12}>
          <Map />
        </Cell>
        <Cell col={4}>
          <AdvancedFilters />
        </Cell>
        <Cell col={8}>
          <div
            className="center-block mdl-shadow--2dp"
            style={{ marginBottom: 15, padding: '7.5px 30px', background: 'white' }}
          >
            <FreeSearchFilter />
          </div>
          <div className="center-block" style={{ marginBottom: 20 }}>
            <InfluencerList />
          </div>
        </Cell>
      </Grid>
    </Layout>
  );
}

export default Home;
