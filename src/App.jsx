import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Login from "./features/login/pages/Login"
import ForgotPass from "./features/login/pages/ForgotPass"
import OTPVerify from "./features/login/pages/OTPVerify"
import ResetPass from "./features/login/pages/ResetPass"
import Overview from "./features/overview/pages/Overview"

function App() {

  const router = createBrowserRouter([
    { path: '/login', element: <Login /> },
    { path: '/login/forgot-password', element: <ForgotPass /> },
    { path: '/login/otp-verification', element: <OTPVerify /> },
    { path: '/login/reset-password', element: <ResetPass /> },
    { path: '/overview', element: <Overview /> }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
