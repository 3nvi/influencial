import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Infinite from '../../lib/react-infinite';
import Influencer from './list_item';
import { updateInfluencers } from '../../actions/index';

class InfluencerList extends Component {
  constructor(props) {
    super(props);

    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  handleInfiniteLoad() {
    if (this.props.initialized && !this.props.noMoreResults && !this.props.isFetching) {
      this.props.updateInfluencers(this.props.currentPage + 1);
    }
  }

  render() {
    let order = 0;
    return (
      <Infinite
        className="influencer-list"
        elementHeight={200}
        infiniteLoadBeginEdgeOffset={100}
        preloadBatchSize={Infinite.containerHeightScaleFactor(2)}
        onInfiniteLoad={this.handleInfiniteLoad}
        useWindowAsScrollContainer
      >
        {
          this.props.influencers.map((influencer) => {
            order += 1;
            return <Influencer key={influencer.id} {...influencer} order={order} />;
          })
        }
      </Infinite>
    );
  }
}

InfluencerList.propTypes = {
  influencers: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  currentPage: React.PropTypes.number.isRequired,
  updateInfluencers: React.PropTypes.func.isRequired,
  noMoreResults: React.PropTypes.bool.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  initialized: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    influencers: state.influencer.items,
    currentPage: state.influencer.page,
    noMoreResults: state.influencer.noMoreResults,
    isFetching: state.influencer.isFetching,
    initialized: state.common.initialized
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateInfluencers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfluencerList);
