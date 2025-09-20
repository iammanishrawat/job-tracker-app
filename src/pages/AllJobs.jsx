import { useEffect, useState } from 'react'
const AllJobs = () => {
  const [allJobListData, setAllJobListData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => {
        setAllJobListData(data)
      })
      .catch(`no data found`)
  }, [])
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">All Jobs</h2>

      <div className="space-y-4">
        {allJobListData.map((jobs) => {
          return (
            <div className="border p-4 rounded shadow" key={jobs.id}>
              <h3 className="text-lg font-semibold">{jobs.title}</h3>
              <p>Company: {jobs.company}</p>
              <p>Location: {jobs.location}</p>
              <p>Salary: {jobs.salary}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllJobs
