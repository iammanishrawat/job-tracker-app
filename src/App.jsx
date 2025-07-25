import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Error from './pages/Error'
import AddJob from './pages/AddJob'
import AllJobs from './pages/AllJobs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'add-job', element: <AddJob /> },
      { path: 'all-jobs', element: <AllJobs /> },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: 'register', element: <Register /> },
  { path: '*', element: <Error /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
