import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Overlay, Button, List, ListItem, Link } from '@atomikui/core';

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

const UserCard = ({
  firstName,
  lastName,
  email,
  avatar,
  onUpdate,
  onDelete,
}) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="user-card">
      <Overlay className="is-confirm" isActive={showConfirm}>
        <div className="text-align-center text-color-white">
          <div className="margin-bottom-16">
            delete
            <br />
            <span className="text-size-24">
              {fullName(firstName, lastName)}?
            </span>
          </div>
          <List type="horizontal">
            <ListItem>
              <Button
                theme="red"
                size="md"
                shape="pill"
                onClick={() => {
                  onDelete();
                  setShowConfirm(false);
                }}
              >
                delete
              </Button>
            </ListItem>
            <ListItem>
              <Button
                theme="white"
                size="md"
                shape="pill"
                onClick={() => setShowConfirm(false)}
              >
                cancel
              </Button>
            </ListItem>
          </List>
        </div>
      </Overlay>
      {avatar && (
        <img
          className="user-card__avatar"
          src={avatar}
          alt={fullName(firstName, lastName)}
        />
      )}
      {!avatar && (
        <Icon
          style={{ height: 85, width: 85 }}
          icon={faUserCircle}
          color="#222"
        />
      )}
      <div className="user-card__name">{fullName(firstName, lastName)}</div>
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
            onClick={() => setShowConfirm(true)}
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
