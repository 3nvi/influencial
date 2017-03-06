import React, { Component } from 'react';
import { Textfield } from 'react-mdl';
import { Field, reduxForm } from 'redux-form';
import Tokenfield from '../../components/input/tokenfield';

function topicTextField(props) {
  const { label, input } = props;
  return (
    <Textfield
      {...input}
      label={label}
      floatingLabel
    />
  );
}

function topicHashtagsField(props) {
  const { label, input } = props;
  return (
    <Tokenfield
      {...input}
      label={label}
      floatingLabel
    />
  );
}

class TopicForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="title"
          label="Enter a name for this topic..."
          component={topicTextField}
        />
        <Field
          name="hashtags"
          label="Fill in #hashtags by pressing enter"
          component={topicHashtagsField}
        />
      </form>
    );
  }
}

// Decorate the form component
export default reduxForm({
  form: 'topics'
})(TopicForm);
