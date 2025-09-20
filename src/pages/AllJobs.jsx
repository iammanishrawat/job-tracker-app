const AllJobs = ({ allJobListData }) => {
  return (
    <div className="mt-[100px] max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">All Jobs</h2>

      <div className="space-y-4">
        {allJobListData.map(() => {
          return (
            <div className="border p-4 rounded shadow" key={id}>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p>Company: {company}</p>
              <p>Location: {location}</p>
              <p>Salary: {salary}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllJobs
