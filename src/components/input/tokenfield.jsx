import React, { Component } from 'react';
import { Textfield, Chip } from 'react-mdl';
import _ from 'lodash';

class Tokenfield extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleTokenAddition = this.handleTokenAddition.bind(this);
    this.handleTokenRemoval = this.handleTokenRemoval.bind(this);
  }

  handleKeyPress(event, hasError) {
    if (event.key === 'Enter' && hasError === false) {
      this.handleTokenAddition();
    }
  }

  // don't forget to ACCOUNT for previous tokens on each change
  handleChange(event, tokens) {
    this.props.onChange(`${tokens.join(',')},${event.target.value}`);
  }

  // add a comma on enter
  handleTokenAddition() {
    this.props.onChange(`${this.props.value},`);
  }

  // simply replace the "token," with ""
  handleTokenRemoval(tokenValue) {
    this.props.onChange(this.props.value.replace(`${tokenValue},`, ''));
  }

  renderTokenList(tokenList) {
    return tokenList.map((token) => {
      if (token) {
        return (
          <Chip key={token.toLowerCase()} onClose={() => this.handleTokenRemoval(token)}>
            {token}
          </Chip>
        );
      }
      return false;
    });
  }

  render() {
    const parts = this.props.value.split(',');
    const filledInValue = _.last(parts).replace(' ', '');
    const tokens = (filledInValue) ? parts.splice(0, parts.length - 1) : _.pull(parts, '');
    const hasError = tokens.map(i => i.toLowerCase()).indexOf(filledInValue.toLowerCase()) !== -1;

    return (
      <div className="mdl-tokenfield">
        <Textfield
          floatingLabel
          value={filledInValue}
          label={this.props.label}
          onKeyPress={event => this.handleKeyPress(event, hasError)}
          onChange={event => this.handleChange(event, tokens)}
          error={(hasError) ? 'Cannot add duplicate tokens' : false}
        />
        <div className="center-block text-left">
          {this.renderTokenList(tokens)}
        </div>
      </div>
    );
  }
}

Tokenfield.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};

Tokenfield.defaultProps = {
  label: 'Enter some values...',
  value: '',
  onChange: () => true
};

export default Tokenfield;
