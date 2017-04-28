/* eslint-disable react/prop-types */

import React from 'react';
import { Textfield } from 'react-mdl';
import Tokenfield from '../../components/input/tokenfield';

export function topicTextField(props) {
  const { label, input, meta: { error, touched } } = props;
  return (
    <Textfield
      {...input}
      label={label}
      floatingLabel
      error={(touched && error) ? error : ''}
    />
  );
}

export function topicHashtagsField(props) {
  const { label, input, meta: { error } } = props;
  return (
    <Tokenfield
      {...input}
      label={label}
      floatingLabel
      error={error || ''}
    />
  );
}
