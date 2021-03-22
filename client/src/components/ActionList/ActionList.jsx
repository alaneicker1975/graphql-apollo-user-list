import React, { Children } from 'react';
import PropTypes from 'prop-types';

const ActionList = ({ children }) => (
  <ul className="action-list">
    {Children.map(children, (child, index) => (
      <li key={`action-item-${index + 1}`}>{child}</li>
    ))}
  </ul>
);

ActionList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActionList;
