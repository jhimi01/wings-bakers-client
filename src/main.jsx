import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './page/HomePage/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import LoginLAyout from './LoginLAyout/LoginLAyout';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import Blog from './page/Blog/Blog';
import Main from './Main/Main';
import ViewRecipe from './page/ViewRecipe/ViewRecipe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLAyout></LoginLAyout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/home'></Navigate>
      },
      {
        path: '/login',
        element: <Login></Login>
      },{
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
{
  path: '/home',
  element: <Home></Home>
}
      ,{
        path: '/blog',
        element: <Blog></Blog>
      },{
        path: '/chefs/:id',
        element: <ViewRecipe></ViewRecipe>,
        loader: (({ params }) => fetch('http://localhost:5000/chefs'))
      }
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
