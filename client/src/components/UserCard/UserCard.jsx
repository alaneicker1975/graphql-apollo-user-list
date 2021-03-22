import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, List, ListItem, Link } from '@atomikui/core';
import ConfirmationOverlay from '../ConfirmationOverlay';
import UserAvatar from '../UserAvatar';

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
      <UserAvatar className="user-card__avatar" src={avatar} alt={fullName} />
      <div className="user-card__name">{fullName}</div>
      <div className="user-card__info">
        <Link href={`mailto:${email}`}>{email}</Link>
      </div>
      <List type="horizontal" className="user-card__actions">
        <ListItem>
          <Button
            theme="blue"
            shape="pill"
            size="md"
            onClick={() => onUpdate()}
          >
            edit
          </Button>
        </ListItem>
        <ListItem>
          <Button
            theme="blue-gray"
            shape="pill"
            size="md"
            onClick={() => setShowCancelConfirmation(true)}
          >
            delete
          </Button>
        </ListItem>
      </List>
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
