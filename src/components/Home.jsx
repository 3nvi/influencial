import React from 'react';
import { Cell, Grid } from 'react-mdl';
import ClearFilters from '../containers/filters/clear_filters_button';

import Map from './map/index';
import AdvancedFilters from './filters/index';
import InfluencerList from '../containers/influencers/list';
import FreeSearchFilter from '../containers/filters/free_search_filter';

function Home() {
  return (
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
  );
}

export default Home;
