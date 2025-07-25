import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'
import SidebarComponent from '../components/Sidebar'

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <NavbarComponent />
      <main>
        <SidebarComponent />
        <section className="dashboard-content">
          {/* Content will be rendered here */}
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default DashboardLayout
