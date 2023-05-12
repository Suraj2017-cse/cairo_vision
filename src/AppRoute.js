import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import HealthPlans from './Pages/HealthPlans'
import Employers from './Pages/Employers'
import BePapaPal from './Pages/BePapaPal'
import ResourcesPage from './Pages/ResourcesPage'

const AppRoute = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element : <Home />
        },
        {
          path : '/health-plans',
          element : <HealthPlans />
        },
        {
          path : '/employers',
          element : <Employers />
        },
        {
          path : '//be-papa-pal',
          element : <BePapaPal />
        },
        {
          path : '/resources',
          element : <ResourcesPage />
        },

    ])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default AppRoute