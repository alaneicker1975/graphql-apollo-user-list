import React from 'react';
import { useQuery } from '@apollo/client';
import { List, ListItem, Button, Alert, Spinner } from '@atomikui/core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { getPosts } from './queries';

const BlogPosts = () => {
  const { loading, error, data } = useQuery(getPosts());

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
    return <Alert theme="error">Error: Could not load posts</Alert>;
  }

  return (
    <List className="blog-posts" loose>
      {data.posts.map((post, index) => (
        <ListItem key={`item-${index + 1}`} className="blog-posts__item">
          <div>
            <div className="blog-posts__title">{post.title}</div>
            <p>{post.body}</p>
          </div>
          <List className="text-align-right" loose>
            <ListItem>
              <Button
                className="blog-posts__button"
                theme="hollow"
                size="md"
                block
              >
                <Icon icon={faEdit} size="lg" color="white" />
                edit
              </Button>
            </ListItem>
            <ListItem>
              <Button
                className="blog-posts__button"
                theme="hollow"
                size="md"
                block
              >
                <Icon icon={faTrashAlt} size="lg" color="white" />
                delete
              </Button>
            </ListItem>
          </List>
        </ListItem>
      ))}
    </List>
  );
};

export default BlogPosts;
