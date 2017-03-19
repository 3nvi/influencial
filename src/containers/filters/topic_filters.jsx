import React, { Component } from 'react';
import { Button } from 'react-mdl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckboxFilter from './templates/checkbox_filter_component';
import { TOGGLE_TOPIC_FILTER } from '../../actions/types';
import TopicModal from '../topics/editor';
import {
  openTopicCreate,
  openTopicUpdate,
  openTopicDelete,
  fetchTopics
} from '../../actions/index';

class TopicFilters extends Component {
  componentWillMount() {
    this.props.fetchTopics();
  }

  render() {
    return (
      <div>
        <CheckboxFilter
          actionType={TOGGLE_TOPIC_FILTER}
          itemsStateName="topics"
          editable
          deletable
          handleUpdate={this.props.openTopicUpdate}
          handleDelete={this.props.openTopicDelete}
        />
        <Button
          className="transparent"
          ripple
          style={{ float: 'left', margin: '0 0 15px -15px' }}
          onClick={this.props.openTopicCreate}
        >
          + add new
        </Button>
        <TopicModal />
      </div>
    );
  }
}

TopicFilters.propTypes = {
  openTopicCreate: React.PropTypes.func.isRequired,
  openTopicUpdate: React.PropTypes.func.isRequired,
  openTopicDelete: React.PropTypes.func.isRequired,
  fetchTopics: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openTopicCreate,
    openTopicUpdate,
    openTopicDelete,
    fetchTopics
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(TopicFilters);

