/* eslint-disable camelcase */
import React from 'react';
import { useQuery } from '@apollo/client';
import { List, ListItem, Button, Link, Alert, Spinner } from '@atomikui/core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { getUsers } from './queries';

const Users = () => {
  const { loading, error, data } = useQuery(getUsers());

  if (loading) {
    return (
      <Spinner
        size="xlg"
        theme="white"
        themeVariant="light"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 100,
        }}
      />
    );
  }

  if (error) {
    return <Alert theme="error">Error: Could not load users</Alert>;
  }

  const { page, per_page, total, total_pages, ...users } = data.users;

  const createPaginationButtons = () => {
    const buttons = [];

    for (let i = 1; i <= total_pages; i += 1) {
      buttons.push(
        <ListItem key={`page-item-${i}`}>
          <Button
            theme={i === page ? 'sky-blue' : 'white'}
            size="md"
            onClick={() => {}}
          >
            {i}
          </Button>
        </ListItem>,
      );
    }

    return buttons;
  };

  return (
    <div className="user-container">
      <List className="text-align-center" type="horizontal">
        {createPaginationButtons()}
      </List>
      <Grid>
        <Row>
          {users.data.map(({ first_name, last_name, email, avatar }, index) => (
            <Col md={4} key={`user-${index + 1}`}>
              <div className="user-card">
                <img
                  className="user-card__avatar"
                  src={avatar}
                  alt={`${first_name} ${last_name}`}
                />
                <div className="user-card__name">
                  {first_name} {last_name}
                </div>
                <div className="user-card__info">
                  <Link href={`mailto:${email}`}>{email}</Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default Users;
