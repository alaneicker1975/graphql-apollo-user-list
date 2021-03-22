import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@atomikui/core';

const EmailLink = ({ children }) => (
  <Link href={`mailto:${children}`}>{children}</Link>
);

EmailLink.propTypes = {
  children: PropTypes.string.isRequired,
};

export default EmailLink;
