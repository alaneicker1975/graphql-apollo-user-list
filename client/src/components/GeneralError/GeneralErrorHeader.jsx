import React from 'react';
import PropTypes from 'prop-types';

const GeneralErrorHeader = ({ children }) => (
  <div className="general-error__header">{children}</div>
);

GeneralErrorHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralErrorHeader;
