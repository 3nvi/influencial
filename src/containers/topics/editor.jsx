import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import _ from 'lodash';
import { closeTopicModal, createTopic, updateTopic, deleteTopic } from '../../actions/index';
import ModalForm from './modal-form';
import { topicTextField, topicHashtagsField } from './util';

class TopicCreateOrUpdate extends Component {
  constructor(props) {
    super(props);

    this.getTitle = this.getTitle.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.renderModalContent = this.renderModalContent.bind(this);
  }

  getTitle() {
    switch (this.props.operation) {
      case 'create':
        return 'Add a new topic';
      case 'update':
        return 'Update topic';
      default:
        return 'Delete topic';
    }
  }

  handleConfirm(values) {
    if (!values.title) {
      throw new SubmissionError({ title: 'You have to specify a topic name' });
    }
    if (values.hashtags.indexOf(',') < 0) {
      throw new SubmissionError({ hashtags: 'You have to press Enter to add a hashtag' });
    }

    const title = values.title;
    const { selectedTopic, operation } = this.props;
    const hashtags = _.initial(values.hashtags.split(','));

    if (operation === 'create') {
      this.props.createTopic({ title, hashtags });
    } else if (operation === 'update') {
      this.props.updateTopic({ title, hashtags, selectedTopic });
    } else {
      this.props.deleteTopic(selectedTopic);
    }
  }

  renderModalContent() {
    if (this.props.operation !== 'delete') {
      return (
        <div>
          <Field
            name="title"
            label={this.props.operation === 'create' ? 'Enter a name for this topic...' : ''}
            component={topicTextField}
          />
          <Field
            name="hashtags"
            label="Fill in #hashtags by pressing Enter"
            component={topicHashtagsField}
          />
        </div>
      );
    }
    return (
      <div>
        Are you sure you want to delete:
        <br />
        <b style={{ textDecoration: 'underline' }}>{this.props.selectedTopic.title}</b>?
      </div>
    );
  }

  render() {
    const title = this.getTitle();
    const confirmText = title.split(' ')[0];

    return (
      <ModalForm
        {...this.props}
        isOpened={this.props.operation !== null}
        title={title}
        confirmText={confirmText}
        handleConfirm={this.handleConfirm}
      >
        {this.renderModalContent()}
      </ModalForm>
    );
  }
}

TopicCreateOrUpdate.propTypes = {
  operation: React.PropTypes.string,
  selectedTopic: React.PropTypes.objectOf(React.PropTypes.any),
  createTopic: React.PropTypes.func.isRequired,
  updateTopic: React.PropTypes.func.isRequired,
  deleteTopic: React.PropTypes.func.isRequired
};

TopicCreateOrUpdate.defaultProps = {
  operation: null,
  selectedTopic: null
};

function validate(values, props) {
  const { title, hashtags } = values;
  const errors = {};

  if (title && props.topicTitles.indexOf(title.toLowerCase()) > -1) {
    if (!props.initialValues || title !== props.initialValues.title) {
      errors.title = 'This topic name already exists';
    }
  }
  if (hashtags) {
    const currentToken = _.last(hashtags.split(',')).toLowerCase();
    const addedTokens = _.initial(_.map(hashtags.split(','), token => token.toLowerCase()));
    if (addedTokens.indexOf(currentToken) > -1) {
      errors.hashtags = 'Cannot add duplicate hashtags';
    }
  }
  return errors;
}

function mapStateToProps(state) {
  const props = {
    operation: state.modals.selectedOperation,
    topicTitles: _.map(_.keys(state.filters.topics), title => title.toLowerCase())
  };

  if (props.operation && props.operation !== 'create') {
    props.selectedTopic = state.filters.topics[state.modals.selectedTopicKey];
    props.initialValues = {
      title: props.selectedTopic.title,
      hashtags: props.selectedTopic.hashtags.map(hashtag => `${hashtag},`).join('')
    };
  }

  return props;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleCancel: closeTopicModal,
    createTopic,
    updateTopic,
    deleteTopic,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'topic',
  validate
})(TopicCreateOrUpdate));

