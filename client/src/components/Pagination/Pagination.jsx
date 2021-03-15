import React from 'react';
import { List, Dropdown } from '@atomikui/core';
import { useAppContext } from '../../context/AppContext';

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } = useAppContext();

  const options = Array.from(Array(totalPages).keys()).map((key) => {
    const page = (key + 1).toString();
    return { text: `Page ${page}`, value: page };
  });

  return (
    <>
      <List type="horizontal">
        <Dropdown
          style={{ width: 120 }}
          value={currentPage.toString()}
          onChange={(e) => setCurrentPage(+e.target.value)}
          options={options}
          aria-label="select page"
        />
      </List>
    </>
  );
};

export default Pagination;
