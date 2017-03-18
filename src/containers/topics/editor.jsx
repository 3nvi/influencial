import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { closeTopicModal } from '../../actions/index';
import ModalForm from './modal-form';
import { topicTextField, topicHashtagsField } from './util';

function TopicCreate(props) {
  const { operation } = props;
  const title = (() => {
    switch (operation) {
      case 'create':
        return 'Add a new topic';
      case 'update':
        return 'Update topic';
      default:
        return 'Delete topic';
    }
  })();
  const confirmText = title.split(' ')[0];
  const displayLabel = operation === 'create';

  return (
    <ModalForm
      {...props}
      isOpened={operation !== null}
      title={title}
      confirmText={confirmText}
    >
      <div>
        <Field
          name="title"
          label={displayLabel ? 'Enter a name for this topic...' : ''}
          component={topicTextField}
        />
        <Field
          name="hashtags"
          label="Fill in #hashtags by pressing Enter"
          component={topicHashtagsField}
        />
      </div>
    </ModalForm>
  );
}

TopicCreate.propTypes = {
  operation: React.PropTypes.string
};

TopicCreate.defaultProps = {
  operation: null
};

function mapStateToProps(state) {
  const props = { operation: state.modals.selectedOperation };

  if (props.operation === 'update') {
    const selectedTopic = state.filters.topics[state.modals.selectedTopicKey];
    props.initialValues = {
      title: selectedTopic.title,
      hashtags: selectedTopic.hashtags.map(hashtag => `${hashtag},`).join('')
    };
  }

  return props;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleCancel: closeTopicModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'topic'
})(TopicCreate));

