import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState({ isOpen: false, type: 'add' });
  const [showLoader, setShowLoader] = useState(false);
  const [editId, setEditId] = useState();

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        showLoader,
        setShowLoader,
        modal,
        setModal,
        editId,
        setEditId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
