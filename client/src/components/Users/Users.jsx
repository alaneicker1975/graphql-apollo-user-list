import React, { useEffect } from 'react';
import { Alert, Button } from '@atomikui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Pagination from '../Pagination';
import UserCard from '../UserCard';
import { useGetUsers, useDeleteUser } from './hooks';
import { useAppContext } from '../../context/AppContext';

const Users = () => {
  const { setShowEditModal, setEditId, setShowLoader } = useAppContext();
  const { loading, error, data, fetchMore } = useGetUsers();
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
      <div className="flex flex--align-middle">
        <div style={{ flex: 1 }}>
          <Pagination
            totalPages={total_pages}
            currentPage={page}
            onPageSelect={fetchMore}
          />
        </div>
        <div>
          <Button theme="blue" shape="pill">
            add user
          </Button>
        </div>
      </div>
      <Grid>
        <Row>
          {userData.map(
            ({ id, first_name, last_name, email, avatar }, index) => (
              <Col md={4} key={`user-${index + 1}`}>
                <UserCard
                  firstName={first_name}
                  lastName={last_name}
                  email={email}
                  avatar={avatar}
                  onUpdate={() => {
                    setShowEditModal(true);
                    setEditId(id);
                  }}
                  onDelete={() => handleDeleteUser(id)}
                />
              </Col>
            ),
          )}
        </Row>
      </Grid>
    </div>
  );
};

export default Users;
