import { useEffect, useState } from 'react'
import JobsList from '../pages/jobsList'
import AddJob from '../pages/AddJob'
const Jobs = () => {
  const [jobListData, setJobListData] = useState([])
  const fetchJobList = () => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobListData(data)
      })
      .catch(() => {
        alert(`no data found`)
      })
  }
  const newAddJob = () => {
    newAddJob([...JobsList, AddJob])
  }
  useEffect(() => {
    fetchJobList()
  }, [])
  return (
    <>
      <div className="p-6">
        <h1>Jobs</h1>
        <AddJob fetchNewJob={fetchJobList} />
        <JobsList jobListData={jobListData} />
      </div>
    </>
  )
}

export default Jobs
