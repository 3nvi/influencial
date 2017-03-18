import React from 'react';
import { Textfield } from 'react-mdl';
import Tokenfield from '../../components/input/tokenfield';

export function topicTextField(props) {
  const { label, input } = props;
  return (
    <Textfield
      {...input}
      label={label}
      floatingLabel
    />
  );
}

export function topicHashtagsField(props) {
  const { label, input } = props;
  return (
    <Tokenfield
      {...input}
      label={label}
      floatingLabel
    />
  );
}
