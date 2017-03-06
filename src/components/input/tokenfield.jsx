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
    this.state = {
      value: '',
      tokens: (this.props.value) ? this.props.value.split(',') : [],
      hasError: false
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      hasError: false
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      const formattedHashtag = event.target.value.split(' ').map(p => _.capitalize(p)).join('');
      this.handleTokenAddition(formattedHashtag);
    }
  }

  handleTokenAddition(tokenValue) {
    const newTokenList = this.state.tokens.slice();
    const newTokenListLow = newTokenList.map(token => token.toLowerCase());

    // only add it if it doesn't exist and it's not empty
    if (tokenValue && newTokenListLow.indexOf(tokenValue.toLowerCase()) === -1) {
      newTokenList.push(tokenValue);

      // inform any subscribers
      this.props.onChange(newTokenList.join());

      // update internal state
      this.setState({
        value: '',
        tokens: newTokenList,
        hasError: false
      });
    } else {
      this.setState({ hasError: true });
    }
  }

  handleTokenRemoval(tokenValue) {
    const newTokenList = _.pull(this.state.tokens, tokenValue);

    // inform any subscribers
    this.props.onChange(newTokenList.join());

    // update internal state
    this.setState({
      value: '',
      tokens: _.pull(this.state.tokens, tokenValue)
    });
  }

  renderTokenList(tokenList) {
    return tokenList.map(token => (
      <Chip key={token.toLowerCase()} onClose={() => this.handleTokenRemoval(token)}>{token}</Chip>
    ));
  }

  render() {
    return (
      <div className="mdl-tokenfield">
        <Textfield
          floatingLabel
          value={this.state.value}
          label={this.props.label}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          error={(this.state.hasError) ? 'Cannot add duplicate tokens' : false}
        />
        <div className="center-block text-left">
          {this.renderTokenList(this.state.tokens)}
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