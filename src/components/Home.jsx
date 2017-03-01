import React from 'react';
import { Layout, Grid, Cell, Navigation, Header } from 'react-mdl';
import { Link } from 'react-router';

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
        <Cell col={12}>
          <Map />
        </Cell>
        <Cell col={4}>
          <AdvancedFilters />
        </Cell>
        <Cell col={8}>
          <Cell
            col={12}
            shadow={0}
            className="center-block"
            style={{ marginBottom: 30, padding: '5px 30px', background: 'white' }}
          >
            <FreeSearchFilter />
          </Cell>
          {/*<Cell col={12} shadow={0} className="center-block" style={{ marginBottom: 20 }}>*/}
            {/*<InfluencerList />*/}
          {/*</Cell>*/}
        </Cell>
      </Grid>
    </Layout>
  );
}

export default Home;
