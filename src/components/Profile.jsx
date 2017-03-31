import React, { Component } from 'react';
import { Cell, Grid, Spinner } from 'react-mdl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProfileCard from '../containers/influencers/list_item';
import { fetchInfluencerDetails } from '../actions/index';
import LineChart from '../components/charts/line_chart';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.renderEmbeddedContent = this.renderEmbeddedContent.bind(this);
  }
  componentWillMount() {
    this.props.fetchInfluencerDetails(this.props.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.influencer === null && this.props.influencer !== null) {
      if (this.props.influencer.service === 'twitter') {
        twttr.widgets.load();
      }
    }
  }

  renderEmbeddedContent() {
    return (this.props.influencer.service === 'twitter') ? (
      <a
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '480px' }}
        className="twitter-timeline"
        data-height="980"
        href={this.props.influencer.service_url}
      >
        <Spinner />
      </a>
    ) : (
      <iframe
        src="https://www.instagram.com/p/qbq6fIJMVZ/embed/"
        width="100%"
        height="360px"
        style={{ border: 'none' }}
      />
    );
  }

  render() {
    if (!this.props.influencer) {
      return (
        <Spinner className="spinner--page-loading" />
      );
    }

    return (
      <Grid>
        <Cell col={3}>
          <img
            alt="Influencer\'s profile"
            width="100%"
            height="100%"
            className="mdl-shadow--2dp"
            src={this.props.influencer.image}
          />
        </Cell>
        <Cell col={9}>
          <ProfileCard version="advanced" influencer={this.props.influencer} />
        </Cell>
        <Cell col={3}>
          <div className="mdl-shadow--2dp">
            {this.renderEmbeddedContent()}
          </div>
        </Cell>
        <Cell
          col={9}
        >
          <div className="mdl-shadow--2dp chart-container">
            <LineChart
              title="Timeline of Topics mentioned within Posts & Tweets"
              container="upper-chart"
              endpoint={`influencers/${this.props.params.id}/topics-history/`}
              extractionVariable="title"
            />
          </div>
          <div className="mdl-shadow--2dp chart-container">
            <LineChart
              title="Timeline of Hashtag appearances in social media content"
              container="bottom-chart"
              endpoint={`influencers/${this.props.params.id}/mentions-history/`}
              extractionVariable="hashtag"
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

Profile.propTypes = {
  influencer: React.PropTypes.object,
  fetchInfluencerDetails: React.PropTypes.func.isRequired,
  params: React.PropTypes.shape({
    id: React.PropTypes.string
  }).isRequired
};

Profile.defaultProps = {
  influencer: null
};

function mapStateToProps(state) {
  return {
    influencer: state.influencer.selectedInfluencerDetails
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchInfluencerDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
