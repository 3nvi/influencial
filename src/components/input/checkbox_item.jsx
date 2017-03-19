import React from 'react';
import { Checkbox, IconButton } from 'react-mdl';
import { openTopicUpdate, openTopicDelete } from '../../actions/index';

function CheckboxItem(props) {
  const checkbox = (
    <Checkbox
      label={props.name.split('-').join(' ')}
      name={props.name}
      ripple
      checked={props.checked}
      onChange={props.handleCheckboxChange}
    />
  );

  if (!(props.editable || props.deletable)) {
    return checkbox;
  }

  return (
    <div className="mdl-checkbox--with-options">
      {checkbox}
      <span className="checkbox-options">
        <IconButton name="create" ripple onClick={() => props.handleUpdate(props.name)} />
        <IconButton name="delete" ripple onClick={() => props.handleDelete(props.name)} />
      </span>
    </div>
  );
}

CheckboxItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool.isRequired,
  handleCheckboxChange: React.PropTypes.func.isRequired,
  handleUpdate: React.PropTypes.func.isRequired,
  handleDelete: React.PropTypes.func.isRequired,
  editable: React.PropTypes.bool,
  deletable: React.PropTypes.bool
};

CheckboxItem.defaultProps = {
  editable: false,
  deletable: false
};

export default CheckboxItem;

