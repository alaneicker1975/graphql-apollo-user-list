import React from 'react';
import { Button } from '@atomikui/core';
import Pagination from '../Pagination';
import { useAppContext } from '../../context/AppContext';

const Header = () => {
  const { setModal } = useAppContext();

  return (
    <div className="flex flex--align-middle padding-left-8 padding-right-8 margin-bottom-16">
      <div className="flex flex--hr-12 flex__item--grow">
        <Pagination />
      </div>
      <div>
        <Button
          theme="blue"
          shape="pill"
          onClick={() => setModal({ isOpen: true, type: 'add' })}
        >
          add user
        </Button>
      </div>
    </div>
  );
};

export default Header;
