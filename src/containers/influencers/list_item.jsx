import React from 'react';
import { Icon } from 'react-mdl';

const humanize = require('humanize');

function InfluencerListItem(props) {
  return (
    <li className="influncer-list__item mdl-shadow--2dp">
      <a href="#">
        <img src={props.image} alt="Random" />
      </a>
      <div>
        <h4 className="name">
          <a href="#">{props.name}</a>
          {props.gender !== null ? <i className="fa fa-mars" /> : false }
        </h4>
        <div className="location">
          <Icon name="place" style={{ marginLeft: '-3px' }} />
          <span>{props.location}</span>
        </div>
        <div className="service">
          <i className={`fa fa-${props.service.toLowerCase()}`} />
          <a href={props.serviceURL} rel="noopener noreferrer" target="_blank">
            @{props.username}
          </a>

          &#8226; <b>{props.followerCount} Followers</b>
          &#8226; <b>{props.mediaCount} Posts</b>
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
  order: React.PropTypes.number.isRequired,
  gender: React.PropTypes.string,
  image: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  service: React.PropTypes.string.isRequired,
  serviceURL: React.PropTypes.string.isRequired,
  followerCount: React.PropTypes.number.isRequired,
  mediaCount: React.PropTypes.number.isRequired,
  website: React.PropTypes.string.isRequired,
  info: React.PropTypes.string.isRequired
};

InfluencerListItem.defaultProps = {
  gender: null
};

export default InfluencerListItem;
