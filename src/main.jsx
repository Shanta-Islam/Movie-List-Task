import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import CategoryListDetails from './components/CategoryListDetails/CategoryListDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookedList from './components/BookedList/BookedList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: ()=> fetch('https://api.tvmaze.com/search/shows?q=all'),
        element: <Home></Home>
      },
      {
        path: "/movie-list/:id",
        loader: ()=> fetch('https://api.tvmaze.com/search/shows?q=all'),
        element: <CategoryListDetails></CategoryListDetails>
      },
      {
        path: '/bookedList',
        loader: ()=> fetch('https://api.tvmaze.com/search/shows?q=all'),
        element: <BookedList></BookedList>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
