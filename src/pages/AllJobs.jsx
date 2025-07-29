import jobs from '../data/jobs'

const AllJobs = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">All Jobs</h2>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p>Company=: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>
              Status: <span className="text-yellow-600">{job.status}</span>
            </p>
          </div>
        ))}

        {/* <div className="border p-4 rounded shadow">
          <h3 className="text-lg font-semibold">React Developer</h3>
          <p>Company: Infosys</p>
          <p>Location: Bangalore</p>
          <p>
            Status: <span className="text-green-600">Interview</span>
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default AllJobs
