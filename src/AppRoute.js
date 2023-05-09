import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home'
import HealthPlans from './Component/HealthPlans'

const AppRoute = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element : <Home />
        },
        {
          path : '/health-plans',
          element : <HealthPlans />
        }
    ])
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default AppRoute