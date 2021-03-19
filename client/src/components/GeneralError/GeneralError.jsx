import React from 'react';
import PropTypes from 'prop-types';
import GeneralErrorHeader from './GeneralErrorHeader';
import GeneralErrorBody from './GeneralErrorBody';

const GeneralError = ({ children }) => (
  <div className="general-error">{children}</div>
);

GeneralError.propTypes = {
  children: PropTypes.node.isRequired,
};

GeneralError.Header = GeneralErrorHeader;
GeneralError.Body = GeneralErrorBody;

export default GeneralError;
