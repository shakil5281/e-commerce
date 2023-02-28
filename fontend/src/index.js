import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './components/assets/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom';
import {router} from './router'
import searchImages from './api';
searchImages()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

