import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Link, Alert, Overlay, Button } from '@atomikui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Pagination from '../Pagination';
import UserCard from '../UserCard';
import { useGetUsers, useDeleteUser } from './hooks';
import { useAppContext } from '../../context/AppContext';

const Users = ({ defaultPage }) => {
  const { setShowEditModal, setEditId, setShowLoader } = useAppContext();
  const { loading, error, data, fetchMore } = useGetUsers(defaultPage);
  const { deleteUser, deleteInProgress } = useDeleteUser();

  const handleDeleteUser = (id) => {
    setShowLoader(true);
    deleteUser({ variables: { id } });
  };

  useEffect(() => {
    setShowLoader(!!loading || !!deleteInProgress);
  }, [loading, deleteInProgress, setShowLoader]);

  if (loading) {
    return null;
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
          currentPage={page}
          onPageSelect={fetchMore}
        />
      </div>
      <Grid>
        <Row>
          {userData.map(
            ({ id, first_name, last_name, email, avatar }, index) => (
              <Col md={4} key={`user-${index + 1}`}>
                <UserCard
                  id={id}
                  firstName={first_name}
                  lastName={last_name}
                  email={email}
                  avatar={avatar}
                  onUpdate={() => {}}
                  onDelete={() => {}}
                />
                {/* <div className="user-card">
                  <Overlay className="is-confirm" isActive>
                    <div className="text-align-center text-color-white">
                      <div className="margin-bottom-16">
                        delete
                        <br />
                        <span className="text-size-24">
                          {first_name} {last_name}?
                        </span>
                      </div>
                      <List type="horizontal">
                        <ListItem>
                          <Button theme="red" size="md" shape="pill">
                            delete
                          </Button>
                        </ListItem>
                        <ListItem>
                          <Button theme="white" size="md" shape="pill">
                            cancel
                          </Button>
                        </ListItem>
                      </List>
                    </div>
                  </Overlay>
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
                  <List type="horizontal" className="user-card__actions">
                    <ListItem>
                      <Button
                        theme="blue"
                        shape="pill"
                        size="md"
                        onClick={() => {
                          setShowEditModal(true);
                          setEditId(id);
                        }}
                      >
                        edit
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button
                        theme="blue-gray"
                        shape="pill"
                        size="md"
                        onClick={() => handleDeleteUser(id)}
                      >
                        delete
                      </Button>
                    </ListItem>
                  </List>
                </div> */}
              </Col>
            ),
          )}
        </Row>
      </Grid>
    </div>
  );
};

Users.propTypes = {
  defaultPage: PropTypes.number,
};

Users.defaultProps = {
  defaultPage: 1,
};

export default Users;
