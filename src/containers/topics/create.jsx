import { Button } from 'react-mdl';
import React from 'react';
import Modal from '../util/modal';
import TopicForm from './form';

function TopicCreate() {

  const openTopicCreateButton = (
    <Button
      className="transparent"
      ripple
      style={{ float: 'left', marginLeft: '-15px' }}
    >
      + add new
    </Button>
  );

  return (
    <Modal invokerButton={openTopicCreateButton} title="Add a new topic">
      <TopicForm />
    </Modal>
  );
}

export default TopicCreate;
