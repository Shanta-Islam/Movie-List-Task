import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import CategoryListDetails from './components/CategoryListDetails/CategoryListDetails';
import Donation from './components/Donation/Donation';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/category-list/:id",
        loader: ()=> fetch('/categorylist.json'),
        element: <CategoryListDetails></CategoryListDetails>
      },
      {
        path: '/donation',
        loader: ()=> fetch('/categorylist.json'),
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        loader: ()=> fetch('/categorylist.json'),
        element: <Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
