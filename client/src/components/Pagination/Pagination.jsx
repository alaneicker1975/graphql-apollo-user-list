import React from 'react';
import { List, ListItem, Dropdown, Button } from '@atomikui/core';
import { useAppContext } from '../../context/AppContext';

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } = useAppContext();

  const pages = Array.from(Array(totalPages).keys());

  const options = pages.map((key) => {
    const page = (key + 1).toString();
    return { text: `Page ${page}`, value: page };
  });

  const buttons = pages.map((key) => {
    const page = key + 1;
    return (
      <ListItem key={key}>
        <Button
          style={{
            borderRadius: '50%',
            width: 40,
            height: 40,
            padding: 0,
          }}
          theme={page === currentPage ? 'sky-blue' : 'white'}
          shape="pill"
          size="md"
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Button>
      </ListItem>
    );
  });

  return (
    <>
      <Dropdown
        className="display-none@medium"
        style={{ width: 120 }}
        value={currentPage.toString()}
        onChange={(e) => setCurrentPage(+e.target.value)}
        options={options}
        aria-label="select page"
      />
      <List type="horizontal" className="display-none display-block@medium">
        {buttons}
      </List>
    </>
  );
};

export default Pagination;
