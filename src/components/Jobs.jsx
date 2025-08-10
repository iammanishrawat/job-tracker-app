import { useState } from 'react'
import jobsList from '../data/jobsList'
import AddJob from '../pages/AddJob'
import AllJobs from '../pages/AllJobs'

const Jobs = () => {
  const [jobListData, setJobListData] = useState(jobsList)
  const addJob = (newJob) => {
    let existingJobs = [...jobListData, newJob]
    setJobListData(existingJobs)
  }
  return (
    <>
      <AllJobs allJobs={jobListData} />
      <AddJob addJob={addJob} />
    </>
  )
}

export default Jobs
