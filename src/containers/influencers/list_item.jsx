import React from 'react';
import { Icon } from 'react-mdl';
import { Link } from 'react-router';

const humanize = require('humanize');

function InfluencerListItem(props) {
  const profileUrl = `/profile/${props.id}/`;
  return (
    <li className="influncer-list__item mdl-shadow--2dp">
      <Link to={profileUrl}>
        <img src={props.image} alt="Random" />
      </Link>
      <div>
        <h4 className="name">
          <Link to={profileUrl}>{props.name}</Link>
          {props.gender !== null ? <i className="fa fa-mars" /> : false }
        </h4>
        <div className="location">
          <Icon name="place" style={{ marginLeft: '-3px' }} />
          <span>{props.country.name || 'N/A'}</span>
        </div>
        <div className="service">
          <i className={`fa fa-${props.service}`} />
          <a href={props.service_url} rel="noopener noreferrer" target="_blank">
            @{props.username}
          </a>

          &#8226; <b>{props.follower_count} Followers</b>
          &#8226; <b>{props.media_count} Posts</b>
        </div>
        <div className="website">
          <Icon name="public" />
          <a
            href={props.website}
            title={`Visit ${props.name}'s profile`} rel="noopener noreferrer" target="_blank"
          >
            {props.website}
          </a>
        </div>
        <p className="info">
          {props.info}
        </p>
        <div className="order">{props.order}</div>
      </div>
    </li>
  );
}

InfluencerListItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  order: React.PropTypes.number.isRequired,
  gender: React.PropTypes.string,
  image: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  country: React.PropTypes.shape({
    code: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }).isRequired,
  service: React.PropTypes.string.isRequired,
  service_url: React.PropTypes.string.isRequired,
  follower_count: React.PropTypes.number.isRequired,
  media_count: React.PropTypes.number.isRequired,
  website: React.PropTypes.string.isRequired,
  info: React.PropTypes.string.isRequired
};

InfluencerListItem.defaultProps = {
  gender: null
};

export default InfluencerListItem;
