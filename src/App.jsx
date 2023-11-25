import { createBrowserRouter, Outlet, redirect, RouterProvider } from 'react-router-dom'
import { authSlice } from './slices/authSlice.ts'

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    loader: async () => {
      await authSlice.init()
      return null
    },
    Component: Outlet,
    children: [
      {
        path: 'auth',
        Component: Outlet,
        children: [
          {
            path: 'login',
            lazy: () => import('./routes/LoginRoute.jsx'),
          },
          {
            path: 'verify',
            lazy: () => import('./routes/VerifyRoute.jsx'),
          },
        ],
      },
      {
        path: 'dashboard',
        lazy: () => import('./routes/DashboardRoute.jsx'),
      },
      {
        path: '/',
        lazy: () => import('./routes/NotFoundRoute.jsx'),
      },
      {
        path: '*',
        lazy: () => import('./routes/NotFoundRoute.jsx'),
      },
    ],
  },
  {
    path: '/logout',
    Component: null,
    async loader() {
      await authSlice.logout()
      return redirect('/auth/login')
    },
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
