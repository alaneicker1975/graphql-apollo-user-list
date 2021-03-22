import React from 'react';
import emailPropType from 'email-prop-type';
import { Link } from '@atomikui/core';

const EmailLink = ({ children }) => (
  <Link href={`mailto:${children}`}>{children}</Link>
);

EmailLink.propTypes = {
  children: emailPropType.isRequired,
};

export default EmailLink;
