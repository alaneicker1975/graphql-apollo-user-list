import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@atomikui/core';

const UserAvatar = ({ src, alt, fallbackColor }) =>
  src ? (
    <Avatar className="user-avatar" src={src} alt={alt} />
  ) : (
    <Icon
      style={{ height: 85, width: 85 }}
      icon={faUserCircle}
      color={fallbackColor}
    />
  );

UserAvatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallbackColor: PropTypes.string,
};

UserAvatar.defaultProps = {
  src: null,
  alt: '',
  fallbackColor: '#222',
};

export default UserAvatar;
