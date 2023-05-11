import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../../pages/home/HomePage.tsx'
import { DepartmentPage } from '../../pages/department/DepartmentPage.tsx'
import { CatalogPage } from '../../pages/catalog/CatalogPage.tsx'
import { AuthPage } from '../../pages/auth/AuthPage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'department',
        element: <DepartmentPage />
      },
      {
        path: 'catalog',
        element: <CatalogPage />
      },
      {
        path: 'auth',
        element: <AuthPage />
      }
    ]
  }
])
