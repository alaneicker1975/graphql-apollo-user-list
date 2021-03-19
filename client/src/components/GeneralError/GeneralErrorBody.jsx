import React from 'react';
import PropTypes from 'prop-types';

const GeneralErrorBody = ({ children }) => (
  <div className="general-error__body">{children}</div>
);

GeneralErrorBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralErrorBody;
