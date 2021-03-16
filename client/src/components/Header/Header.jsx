import React from 'react';
import { Button } from '@atomikui/core';
import Pagination from '../Pagination';
import { useAppContext } from '../../context/AppContext';

const Header = () => {
  const { setModal } = useAppContext();

  return (
    <header className="header">
      <div className="flex flex--hr-12 flex__item--grow">
        <Pagination />
      </div>
      <div>
        <Button
          theme="cyan"
          shape="pill"
          onClick={() => setModal({ isOpen: true, type: 'add' })}
        >
          add user
        </Button>
      </div>
    </header>
  );
};

export default Header;
