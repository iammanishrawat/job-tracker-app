import { Link, useLocation } from 'react-router-dom'

const SidebarComponent = ({ isOpen }) => {
  const location = useLocation()
  return (
    <aside
      className={`h-screen bg-gray-100 w-64 transition-all duration-300 fixed top-0 left-0 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 border-b">Your Logo</div>
      <ul className="p-4 space-y-2">
        <li>
          <Link
            to="/"
            className={`block p-2 rounded ${
              location.pathname === '/' ? 'bg-blue-200' : ''
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/all-jobs"
            className={`block p-2 rounded ${
              location.pathname === '/all-jobs' ? 'bg-blue-200' : ''
            }`}
          >
            Job Lists
          </Link>
        </li>
        <li>
          <Link
            to="/add-job"
            className={`block p-2 rounded ${
              location.pathname === '/add-job' ? 'bg-blue-200' : ''
            }`}
          >
            Create Job
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default SidebarComponent
