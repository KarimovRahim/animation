import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import DefaultPage from "./pages/defaultPage"
import SecondPage from "./pages/secondPage"
import ThirdPage from "./pages/thirdPage"
import LastPage from "./pages/lastPage"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DefaultPage />
        },
        {
          path: "Second_Page",
          element: <SecondPage />
        },
        {
          path: "Third_Page",
          element: <ThirdPage />
        },
        {
          path: "Last_Page",
          element: <LastPage />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App