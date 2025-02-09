import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './components/Errorpage/Errorpage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import { ToastContainer } from 'react-toastify';
import Listedbook from './components/ListedBook/Listedbook.jsx';
import PageToRead from './components/PageToRead/PageToRead.jsx';
import Signin from './components/Login/Signin.jsx';
import Signup from './components/Login/Signup.jsx';
import Readlist from './components/ListedBook/Readlist.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/Books.json')
      },
      {
        path: '/listedbook',
        element: <Listedbook ></Listedbook>,
        loader: () => fetch('/Books.json'),
        

      },
      {
        path: '/pagetpread',
        element: <PageToRead></PageToRead>

      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"

    />
  </StrictMode>,
)
