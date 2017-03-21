import React from 'react';
import _ from 'lodash';
import { Cell, Grid } from 'react-mdl';
import { connect } from 'react-redux';
import ProfileCard from '../containers/influencers/list_item';

function Profile(props) {
  return (
    <Grid>
      <Cell col={12}>
        <ProfileCard {...props.influencer} />
      </Cell>
      <Cell col={4}>
        <div /> {/* Twitter/Instagram feed */}
      </Cell>
      <Cell col={8}>
        <div /> {/* Charts*/}
      </Cell>
    </Grid>
  );
}

Profile.propTypes = {
  influencer: React.PropTypes.objectOf(React.PropTypes.string).isRequired
};

function mapStateToProps(state, props) {
  return {
    influencer: _.find(state.influencer.items, i => i.id === Number(props.params.id))
  };
}

export default connect(mapStateToProps)(Profile);
