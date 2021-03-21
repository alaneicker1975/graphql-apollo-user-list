import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, Button, List, ListItem } from '@atomikui/core';

const ConfirmationOverlay = ({
  isActive,
  children,
  confirmBtnText,
  cancelBtnText,
  onConfirm,
  onCancel,
}) => (
  <Overlay className="is-confirm" isActive={isActive}>
    <div className="text-align-center text-color-white">
      <div className="margin-bottom-16">{children}</div>
      <List type="horizontal">
        <ListItem>
          <Button theme="red" size="md" shape="pill" onClick={onConfirm}>
            {confirmBtnText}
          </Button>
        </ListItem>
        <ListItem>
          <Button theme="white" size="md" shape="pill" onClick={onCancel}>
            {cancelBtnText}
          </Button>
        </ListItem>
      </List>
    </div>
  </Overlay>
);

ConfirmationOverlay.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  confirmBtnText: PropTypes.string,
  cancelBtnText: PropTypes.string,
};

ConfirmationOverlay.defaultProps = {
  isActive: false,
  children: <div>Are you sure?</div>,
  onConfirm: null,
  onCancel: null,
  confirmBtnText: 'yes',
  cancelBtnText: 'no',
};

export default ConfirmationOverlay;
