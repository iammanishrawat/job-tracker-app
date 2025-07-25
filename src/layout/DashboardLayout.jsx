import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'
import SidebarComponent from '../components/Sidebar'
import { useState } from 'react'

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
    <div className="flex h-screen">
      <SidebarComponent isOpen={sidebarOpen} />
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <main className="overflow-y-auto">
          <NavbarComponent toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
