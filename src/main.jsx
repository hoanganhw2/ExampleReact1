import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'user',
        element: <h1>User</h1>
      },
      {
        path: 'products',
        element: <h1>Products</h1>
      },
      {
        path: 'login',
        element: <h1>Login</h1>
      },
      {
        path: 'register',
        element: <h1>Register</h1>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);