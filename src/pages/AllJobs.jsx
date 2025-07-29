const AllJobs = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">All Jobs</h2>

      <div className="space-y-4">
        <div className="border p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Frontend Developer</h3>
          <p>Company: Google</p>
          <p>Location: Remote</p>
          <p>
            Status: <span className="text-yellow-600">Pending</span>
          </p>
        </div>

        <div className="border p-4 rounded shadow">
          <h3 className="text-lg font-semibold">React Developer</h3>
          <p>Company: Infosys</p>
          <p>Location: Bangalore</p>
          <p>
            Status: <span className="text-green-600">Interview</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AllJobs
