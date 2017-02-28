import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleFilter } from '../../actions/index';
import { TOGGLE_TOPIC_FILTER } from '../../actions/types';
import CheckboxFilter from './checkbox_filter_item';
import CollapsibleFilterItem from './common';

class TopicFilters extends Component {

  constructor(props) {
    super(props);

    this.updateTopicFilters = this.updateTopicFilters.bind(this);
  }

  updateTopicFilters(payload) {
    this.props.toggleFilter(TOGGLE_TOPIC_FILTER, payload);
  }

  renderCheckboxList(topics) {
    return Object.keys(topics || {}).map((topic) => {
      const checked = topics[topic]
      return (
        <CheckboxFilter
          key={topic}
          name={topic}
          checked={checked}
          handleCheckboxChange={this.updateTopicFilters}
        />
      );
    });
  }

  render() {
    return (
      <CollapsibleFilterItem title="Topics">
        {this.renderCheckboxList(this.props.topics)}
      </CollapsibleFilterItem>
    );
  }
}

TopicFilters.propTypes = {
  topics: React.PropTypes.objectOf(React.PropTypes.bool).isRequired,
  toggleFilter: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    topics: state.filters.topics
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFilter }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TopicFilters);
