import React from 'react';
import { Overlay, Spinner } from '@atomikui/core';
import { useAppContext } from '../../context/AppContext';

const Loader = () => {
  const { showLoader } = useAppContext();
  return (
    <Overlay isActive={showLoader}>
      <Spinner
        size="xlg"
        theme="white"
        themeVariant="light"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 900,
        }}
      />
    </Overlay>
  );
};

export default Loader;
