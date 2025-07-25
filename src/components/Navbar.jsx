const NavbarComponent = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center">
      <button onClick={toggleSidebar} className="mr-4">
        ☰
      </button>
      <h1 className="text-lg">Job Tracker</h1>
    </nav>
  )
}

export default NavbarComponent
