import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

class CollapsibleContainer extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isCollapsed: props.initialCollapsedState
    };
  }

  handleClick() {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  render() {
    const isCollapsed = this.state.isCollapsed;

    return (
      <div className={`collapsible-filter ${(isCollapsed) ? 'closed' : ''}`}>
        <button className="collapsible-filter__control" onClick={this.handleClick}>
          {this.props.title}
        </button>
        <PerfectScrollbar>
          <div className="collapsible-filter__item">
            {(!isCollapsed) ? this.props.children : null}
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}

CollapsibleContainer.propTypes = {
  initialCollapsedState: React.PropTypes.bool,
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired
};

CollapsibleContainer.defaultProps = {
  initialCollapsedState: false
};

export default CollapsibleContainer;

