import React from 'react';
import { Icon, Chip } from 'react-mdl';
import { Link } from 'react-router';

function InfluencerListItem(props) {
  const profileUrl = `/profile/${props.influencer.id}/`;
  const orderBadge = (props.rank) ? <div className="order">{props.rank}</div> : false;
  const profilePicture = (props.version === 'advanced') ? false : (
    <Link to={profileUrl}>
      <img src={props.influencer.image} alt="Random" />
    </Link>
  );
  const genderIcon = ((gender) => {
    switch (gender) {
      case 'male':
        return <i className="fa fa-mars" />;
      case 'female':
        return <i className="fa fa-venus" />;
      default:
        return false;
    }
  })(props.influencer.gender);
  const hashtags = (props.version === 'basic') ? false : (
    <div className="hashtags">
      {props.influencer.hashtags.map(hashtag => <Chip key={hashtag}> {hashtag}</Chip>)}
    </div>
  );
  const rankings = (props.version === 'basic') ? false : (
    <div className="rankings">
      <h1>
        #{props.influencer.rank[0].rank}
      </h1>
      <p>
        of past Week on <b>{props.influencer.service}</b>
      </p>
      <p>
        <b>#{props.influencer.rank[1].rank}</b>
        <br />
        of past Month
      </p>
      <p>
        <b>#{props.influencer.rank[2].rank}</b>
        <br />
        of past Trimester
      </p>
    </div>
  );

  return (
    <li className={`influncer-list__item influencer-card version--${props.version} mdl-shadow--2dp`}>
      {profilePicture}
      <div>
        <h4 className="name">
          <Link to={profileUrl}>{props.influencer.name}</Link>
          {genderIcon}
        </h4>
        <div className="location">
          <Icon name="place" style={{ marginLeft: '-3px' }} />
          <span>{props.influencer.country.name || 'N/A'}</span>
        </div>
        <div className="service">
          <i className={`fa fa-${props.influencer.service}`} />
          <a href={props.influencer.service_url} rel="noopener noreferrer" target="_blank">
            @{props.influencer.username}
          </a>

          &#8226; <b>{props.influencer.follower_count} Followers</b>
          &#8226; <b>{props.influencer.media_count} Posts</b>
        </div>
        <div className="website">
          <Icon name="public" />
          <a
            href={props.influencer.website}
            title={`Visit ${props.influencer.name}'s profile`} rel="noopener noreferrer" target="_blank"
          >
            {props.influencer.website}
          </a>
        </div>
        <p className="info">
          {props.influencer.info}
        </p>
        {hashtags}
        {orderBadge}
      </div>
      {rankings}
    </li>
  );
}

InfluencerListItem.propTypes = {
  rank: React.PropTypes.number,
  influencer: React.PropTypes.shape({
    gender: React.PropTypes.string,
    image: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    service: React.PropTypes.string.isRequired,
    service_url: React.PropTypes.string.isRequired,
    follower_count: React.PropTypes.number.isRequired,
    media_count: React.PropTypes.number.isRequired,
    website: React.PropTypes.string.isRequired,
    info: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
    rank: React.PropTypes.arrayOf(React.PropTypes.object),
    hashtags: React.PropTypes.arrayOf(React.PropTypes.string)
  }).isRequired,
  version: React.PropTypes.string
};

InfluencerListItem.defaultProps = {
  gender: null,
  rank: null,
  version: 'basic'
};

export default InfluencerListItem;
