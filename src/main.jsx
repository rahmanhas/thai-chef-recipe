import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/routes/Main.jsx';
import Blogs from './pages/blogs.jsx';
import Home from './pages/Home.jsx';
import Login from './components/LogComponents/Login.jsx';
import Register from './components/LogComponents/Register.jsx';
import ChefInfo from './pages/ChefInfo.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PrivateRoute from './components/routes/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/chefinfo/:id',
        element: <PrivateRoute><ChefInfo /></PrivateRoute>
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
