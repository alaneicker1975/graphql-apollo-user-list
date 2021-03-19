import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import GeneralError from '../GeneralError';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <GeneralError>
          <GeneralError.Header>
            <Icon icon={faExclamationTriangle} size="2x" color="#e53935" />
            <span className="text-weight-bold text-size-36 margin-left-8">
              Oops!
            </span>
          </GeneralError.Header>
          <GeneralError.Body>
            It looks like something went wrong. Please try again later.
          </GeneralError.Body>
        </GeneralError>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
