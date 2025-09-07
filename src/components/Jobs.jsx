import AddJob from '../pages/AddJob'
import JobsList from '../pages/JobsList'
import { useEffect, useState } from 'react'
const Jobs = (jobData) => {
  const [jobListData, setJobListData] = useState([jobData])
  useEffect(() => {
    fetch('https://jsonfakery.com/jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobListData(data)
      })
      .catch(() => {
        alert('Data Not found')
      })
  }, [])
  return (
    <>
      <h1 className="mb-5">Add New Jobs</h1>
      <AddJob addJob={addJob} />
      <JobsList jobData={jobListData} />
    </>
  )
}

export default Jobs
