import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@atomikui/core';
import ConfirmationOverlay from '../ConfirmationOverlay';
import UserAvatar from '../UserAvatar';
import EmailLink from '../EmailLink';
import ActionList from '../ActionList';

const setFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const UserCard = ({
  firstName,
  lastName,
  email,
  avatar,
  onUpdate,
  onDelete,
}) => {
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
  const fullName = setFullName(firstName, lastName);

  return (
    <div className="user-card">
      <ConfirmationOverlay
        isActive={showCancelConfirmation}
        confirmBtnText="delete"
        cancelBtnText="cancel"
        onConfirm={() => {
          onDelete();
          setShowCancelConfirmation(false);
        }}
        onCancel={() => setShowCancelConfirmation(false)}
      >
        delete
        <br />
        <span className="text-size-24">{fullName}?</span>
      </ConfirmationOverlay>
      <UserAvatar src={avatar} alt={fullName} />
      <div className="user-card__name">{fullName}</div>
      <div className="user-card__info">
        <EmailLink>{email}</EmailLink>
      </div>
      <div className="user-card__actions">
        <ActionList>
          <Button
            theme="blue"
            shape="pill"
            size="md"
            onClick={() => onUpdate()}
            block
          >
            edit
          </Button>
          <Button
            theme="blue-gray"
            shape="pill"
            size="md"
            onClick={() => setShowCancelConfirmation(true)}
            block
          >
            delete
          </Button>
        </ActionList>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

UserCard.defaultProps = {
  avatar: null,
};

export default UserCard;
