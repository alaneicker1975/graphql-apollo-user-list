import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@atomikui/core';

const UserAvatar = ({ className, src, alt, fallbackColor }) =>
  src ? (
    <Avatar className={className} src={src} alt={alt} />
  ) : (
    <Icon
      style={{ height: 85, width: 85 }}
      icon={faUserCircle}
      color={fallbackColor}
    />
  );

UserAvatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallbackColor: PropTypes.string,
};

UserAvatar.defaultProps = {
  className: '',
  src: null,
  alt: '',
  fallbackColor: '#222',
};

export default UserAvatar;
