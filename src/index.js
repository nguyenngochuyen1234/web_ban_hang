import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './index.css';
import Client from './Client';
import config from './config.ts'
import { AppProvider } from './AppContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ConfigProvider theme={config}> */}
    <AppProvider>
      <Client />

    </AppProvider>
    {/* </ConfigProvider> */}
  </React.StrictMode>
);


