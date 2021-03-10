import React from 'react';
import { useQuery } from '@apollo/client';
import { List, ListItem, Button } from '@atomikui/core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { GET_POSTS } from './queries';

const BlogPosts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
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
