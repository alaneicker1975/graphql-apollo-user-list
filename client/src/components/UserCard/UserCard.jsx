import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, List, ListItem, Link, Avatar } from '@atomikui/core';
import ConfirmationOverlay from '../ConfirmationOverlay';

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
      {avatar ? (
        <Avatar className="user-card__avatar" src={avatar} alt={fullName} />
      ) : (
        <Icon
          style={{ height: 85, width: 85 }}
          icon={faUserCircle}
          color="#222"
        />
      )}
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
