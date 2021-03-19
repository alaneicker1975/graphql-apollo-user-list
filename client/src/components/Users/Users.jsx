import React, { useEffect } from 'react';
import { Alert } from '@atomikui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import UserCard from '../UserCard';
import { useGetUsers, useDeleteUser } from './hooks';
import { useAppContext } from '../../context/AppContext';

const Users = () => {
  const { setModal, setEditId, setShowLoader } = useAppContext();
  const { loading, error, data } = useGetUsers();
  const { deleteUser, deletingUser } = useDeleteUser();

  const handleDeleteUser = (id) => {
    deleteUser({ variables: { id } });
  };

  useEffect(() => {
    setShowLoader(!!loading || !!deletingUser);
  }, [loading, setShowLoader, deletingUser]);

  if (loading) {
    return null;
  }

  if (error) {
    throw new Error(error);
  }

  const { data: userData } = data?.users;

  return (
    <div className="user-container">
      <Grid>
        <Row>
          {userData.map(
            ({ id, first_name, last_name, email, avatar }, index) => (
              <Col sm={6} md={4} key={`user-${index + 1}`}>
                <UserCard
                  firstName={first_name}
                  lastName={last_name}
                  email={email}
                  {...(avatar && { avatar })}
                  onUpdate={() => {
                    setModal({ isOpen: true, type: 'update' });
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
