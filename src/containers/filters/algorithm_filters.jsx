import React from 'react';
import { connect } from 'react-redux';
import { TOGGLE_ALGORITHM_FILTER } from '../../actions/types';
import SelectFilter from './templates/select_filter_component';

function AlgorithmFilter(props) {
  return (
    <SelectFilter
      title="Select a computational method"
      actionType={TOGGLE_ALGORITHM_FILTER}
      itemsStateName="algorithm"
      value={props.algorithm}
      items={['pagerank', 'tweetrank', 'simple']}
    />
  );
}

function mapStateToProps(state) {
  return {
    algorithm: state.filters.algorithm
  };
}

AlgorithmFilter.propTypes = {
  algorithm: React.PropTypes.string.isRequired
};

export default connect(mapStateToProps)(AlgorithmFilter);
