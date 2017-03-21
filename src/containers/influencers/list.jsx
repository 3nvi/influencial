import React from 'react';
import { connect } from 'react-redux';
import Influencer from './list_item';
import { PAGINATION_ITEM_COUNT } from '../../util';

function InfluencerList(props) {
  let order = 0;
  return (
    <ol className="influecer-list">
      {
        props.influencers.map((influencer) => {
          order += 1;
          return <Influencer key={order} {...influencer} order={order} />;
        })
      }
    </ol>
  );
}

InfluencerList.propTypes = {
  influencers: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  currentPage: React.PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    influencers: state.influencer.items,
    currentPage: state.influencer.page
  };
}

export default connect(mapStateToProps)(InfluencerList);
