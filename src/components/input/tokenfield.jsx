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

  handleKeyPress(event) {
    if (event.key === 'Enter' && !this.props.error) {
      this.handleTokenAddition();
    }
  }

  // don't forget to ACCOUNT for previous tokens on each change
  handleChange(event, tokens) {
    let value = event.target.value;
    if (value.length && value[0] !== '#') {
      value = `#${value}`;
    }

    let previousTokenString = tokens.join(',');
    previousTokenString += (previousTokenString.length) ? ',' : '';
    this.props.onChange(`${previousTokenString}${value}`);
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
    const tokens = (filledInValue) ? _.initial(parts) : _.pull(parts, '');

    return (
      <div className="mdl-tokenfield">
        <Textfield
          floatingLabel
          value={filledInValue}
          label={this.props.label}
          onKeyPress={event => this.handleKeyPress(event)}
          onChange={event => this.handleChange(event, tokens)}
          error={this.props.error || false}
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
  error: React.PropTypes.string,
  onChange: React.PropTypes.func
};

Tokenfield.defaultProps = {
  label: 'Enter some values...',
  value: '',
  error: false,
  onChange: () => true
};

export default Tokenfield;
