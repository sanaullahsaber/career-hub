import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import SingleFeature from './components/SingleFeature';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Statistics></Statistics>,
        loader: () => fetch("jobCategoryList.json"),
      },
      {
        path: '/:id',
        element: <SingleFeature></SingleFeature>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
