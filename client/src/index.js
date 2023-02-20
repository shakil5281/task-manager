import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './route';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import Loding from './components/layout/Loding';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <Suspense fallback={<Loding />}>
          <RouterProvider router={router} />
        </Suspense>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);




