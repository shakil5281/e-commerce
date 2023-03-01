import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './components/assets/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router'
import searchImages from './api';
import { store } from './redux/store'
import { Provider } from 'react-redux'
searchImages()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={null}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.Suspense>
  </React.StrictMode>
);

