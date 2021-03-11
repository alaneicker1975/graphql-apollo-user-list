/* eslint-disable camelcase */
import React from 'react';
import { useQuery } from '@apollo/client';
import { Link, Alert, Spinner } from '@atomikui/core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Pagination from '../Pagination';
import { GET_USERS } from './queries';

const Users = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_USERS, {
    variables: {
      page: 1,
    },
  });

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

  const { page, total_pages, data: userData } = data.users;

  return (
    <div className="user-container">
      <div className="text-align-center">
        <Pagination
          totalPages={total_pages}
          onPageSelect={fetchMore}
          currentPage={page}
        />
      </div>
      <Grid>
        <Row>
          {userData.map(({ first_name, last_name, email, avatar }, index) => (
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
