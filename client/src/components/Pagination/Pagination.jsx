import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Button } from '@atomikui/core';

const Pagination = ({ currentPage, totalPages, onPageSelect }) => (
  <>
    <List type="horizontal">
      {Array.from(Array(totalPages).keys()).map((key) => {
        const page = key + 1;
        return (
          <ListItem key={`page-item-${page}`}>
            <Button
              theme={page === currentPage ? 'sky-blue' : 'white'}
              size="md"
              onClick={() =>
                onPageSelect({
                  variables: {
                    page,
                  },
                  updateQuery: (previousResult, { fetchMoreResult }) =>
                    fetchMoreResult || previousResult,
                })
              }
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

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageSelect: PropTypes.func.isRequired,
};

export default Pagination;
