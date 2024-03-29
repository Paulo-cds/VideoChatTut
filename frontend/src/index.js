import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Viewer from './Viewer';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/viewerStream",
    element:<Viewer />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
