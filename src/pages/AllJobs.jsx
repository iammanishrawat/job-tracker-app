import { useEffect, useState } from 'react'
const AllJobs = () => {
  const [allJobListData, setAllJobListData] = useState([])
  const fetchJobData = () => {
    fetch('http://localhost:3000/jobs')
      .then((response) => response.json())
      .then((data) => {
        setAllJobListData(data)
      })
      .catch((err) => console.error('No Data Found', err))
  }
  useEffect(() => {
    fetchJobData()
  }, [])
  return (
    <div className="mt-[100px] max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">All Jobs</h2>

      <div className="space-y-4">
        {allJobListData.map((job) => {
          return (
            <div className="border p-4 rounded shadow" key={job.id}>
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p>Company: {job.company}</p>
              <p>Location: {job.location}</p>
              <p>Salary: {job.salary}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllJobs
