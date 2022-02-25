import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
        <Routes />
        <ToastContainer />
        <GlobalStyle />
    </>
  );
}

export default App;