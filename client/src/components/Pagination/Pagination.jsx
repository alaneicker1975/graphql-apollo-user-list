import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Button } from '@atomikui/core';
import { useAppContext } from '../../context/AppContext';

const Pagination = ({ currentPage, totalPages }) => {
  const { setCurrentPage } = useAppContext();

  return (
    <>
      <List type="horizontal">
        {Array.from(Array(totalPages).keys()).map((key) => {
          const page = key + 1;
          return (
            <ListItem key={`page-item-${page}`}>
              <Button
                theme={page === currentPage ? 'sky-blue' : 'white'}
                size="md"
                style={{
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  padding: 0,
                }}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            </ListItem>
          );
        })}
      </List>
      <div className="text-color-white margin-top-8">
        Page {currentPage} of {totalPages}
      </div>
    </>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
