import React, { Component } from 'react';
import { Cell, IconButton } from 'react-mdl';

class FilterBlock extends Component {
  constructor(props) {
    super(props);

    this.renderToggle = this.renderToggle.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.state = { collapsed: props.toggle };
  }

  handleToggleClick() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  renderToggle() {
    if (!this.props.toggle) {
      return false;
    }

    return (
      <IconButton
        style={{ marginLeft: '15px' }}
        name={(this.state.collapsed) ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
        onClick={this.handleToggleClick}
      />
    );
  }

  render() {
    return (
      <Cell
        shadow={0}
        col={12}
        className="mdl-typography--text-center mdl-color--white clearfix"
        style={{ marginBottom: '30px' }}
      >
        <h4 style={{ margin: '24px auto' }}>
          {this.props.title}
          {this.renderToggle()}
        </h4>
        {(!this.state.collapsed) ? this.props.children : false}
      </Cell>
    );
  }
}

FilterBlock.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
  toggle: React.PropTypes.bool
};

FilterBlock.defaultProps = {
  toggle: false
};

export default FilterBlock;
